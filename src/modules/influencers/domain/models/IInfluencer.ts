export interface IInfluencer {
  _id: string;
  name: string;
  email: string;
  password: string;
  platforms: {
    twitter: {
      channel: string;
      subscribers: number;
      category: string;
    };
    instagram: {
      channel: string;
      subscribers: number;
      category: string;
    };
  };
  created_at: Date;
  updated_at: Date;
}
