export interface BookingProposeType {
  id: number;
  user_id: number;
  car_id: number;
  start_date: string;
  end_date: string;
  pickup_location: string | null;
  dropoff_location: string | null;
  total_price: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    role: string;
    phone: string | null;
    address: string | null;
  };
}