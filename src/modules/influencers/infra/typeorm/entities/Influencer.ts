import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IInfluencer } from "@modules/influencers/domain/models/IInfluencer";

@Entity("influencers")
class Influencer implements IInfluencer {
  // @PrimaryGeneratedColumn("uuid")
  // _id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Influencer;
