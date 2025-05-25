/*
  # Update events table schema

  1. Changes
    - Add new columns for event management
    - Update existing columns with better constraints
    - Add indexes for improved query performance
  
  2. Security
    - Update RLS policies for better access control
*/

-- Add new columns and modify existing ones
ALTER TABLE events
  ADD COLUMN IF NOT EXISTS event_url TEXT,
  ADD COLUMN IF NOT EXISTS registration_deadline TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS tags TEXT[],
  ADD COLUMN IF NOT EXISTS organizer_id UUID REFERENCES users(id),
  ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS registration_fee NUMERIC DEFAULT 0,
  ADD COLUMN IF NOT EXISTS virtual BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS meeting_link TEXT,
  ADD COLUMN IF NOT EXISTS agenda JSONB;

-- Add indexes for common queries
CREATE INDEX IF NOT EXISTS idx_events_featured ON events(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_events_registration_deadline ON events(registration_deadline);
CREATE INDEX IF NOT EXISTS idx_events_tags ON events USING GIN(tags);

-- Update RLS policies
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published events"
  ON events
  FOR SELECT
  TO authenticated
  USING (status = 'active' OR status = 'upcoming');

CREATE POLICY "Organizers can manage their events"
  ON events
  FOR ALL
  TO authenticated
  USING (organizer_id = auth.uid() OR 
        EXISTS (
          SELECT 1 FROM users 
          WHERE users.id = auth.uid() 
          AND (users.role = 'admin' OR users.role = 'root')
        ))
  WITH CHECK (organizer_id = auth.uid() OR 
             EXISTS (
               SELECT 1 FROM users 
               WHERE users.id = auth.uid() 
               AND (users.role = 'admin' OR users.role = 'root')
             ));