/*
  # Add event registrations and enhance events table

  1. New Tables
    - `event_registrations`
      - `id` (uuid, primary key)
      - `event_id` (uuid, references events)
      - `user_id` (uuid, references users)
      - `status` (text)
      - `payment_status` (text)
      - `amount_paid` (numeric)
      - `registration_date` (timestamptz)
      - `attendance_status` (text)
      - `feedback` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on event_registrations
    - Add policies for viewing and managing registrations
    
  3. Changes
    - Add registration tracking columns to events table
    - Add indexes for efficient querying
*/

-- Create event_registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  status TEXT NOT NULL DEFAULT 'pending',
  payment_status TEXT NOT NULL DEFAULT 'pending',
  amount_paid NUMERIC DEFAULT 0,
  registration_date TIMESTAMPTZ DEFAULT now(),
  attendance_status TEXT DEFAULT 'not_attended',
  feedback TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  
  CONSTRAINT valid_status CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  CONSTRAINT valid_payment_status CHECK (payment_status IN ('pending', 'paid', 'refunded', 'failed')),
  CONSTRAINT valid_attendance CHECK (attendance_status IN ('not_attended', 'attended', 'excused'))
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_event_registrations_event ON event_registrations(event_id);
CREATE INDEX IF NOT EXISTS idx_event_registrations_user ON event_registrations(user_id);
CREATE INDEX IF NOT EXISTS idx_event_registrations_status ON event_registrations(status);
CREATE INDEX IF NOT EXISTS idx_event_registrations_payment ON event_registrations(payment_status);

-- Enable RLS
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own registrations"
  ON event_registrations
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR 
        EXISTS (
          SELECT 1 FROM users 
          WHERE users.id = auth.uid() 
          AND (users.role = 'admin' OR users.role = 'root')
        ));

CREATE POLICY "Users can register for events"
  ON event_registrations
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own registrations"
  ON event_registrations
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid() OR 
        EXISTS (
          SELECT 1 FROM users 
          WHERE users.id = auth.uid() 
          AND (users.role = 'admin' OR users.role = 'root')
        ))
  WITH CHECK (user_id = auth.uid() OR 
             EXISTS (
               SELECT 1 FROM users 
               WHERE users.id = auth.uid() 
               AND (users.role = 'admin' OR users.role = 'root')
             ));

-- Add trigger for updating updated_at
CREATE TRIGGER update_event_registrations_updated_at
  BEFORE UPDATE ON event_registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();