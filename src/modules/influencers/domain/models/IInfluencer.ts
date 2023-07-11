export interface IInfluencer {
  name: string;
  email: string;
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
