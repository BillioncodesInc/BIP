/*
  # Create authentication trigger

  1. New Tables
    - None (uses existing users table)
  
  2. Security
    - Creates trigger to handle user authentication
    - Ensures user data consistency between auth.users and public.users
*/

-- Create a trigger function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, username, role)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'username', 'editor');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Update users table RLS policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile"
  ON public.users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id OR role = 'root');

CREATE POLICY "Only root users can update profiles"
  ON public.users
  FOR UPDATE
  TO authenticated
  USING (role = 'root')
  WITH CHECK (role = 'root');