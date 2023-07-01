import { BusinessInterface } from 'interfaces/business';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AdInterface {
  id?: string;
  title: string;
  content: string;
  is_premium?: boolean;
  business_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AdGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  business_id?: string;
  user_id?: string;
}
