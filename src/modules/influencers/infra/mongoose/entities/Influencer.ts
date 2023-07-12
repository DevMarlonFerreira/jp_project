import mongoose, { Schema } from 'mongoose';
import { IInfluencer } from "@modules/influencers/domain/models/IInfluencer";

const InfluencerSchema: Schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  platforms: {
    twitter: {
      channel: String,
      subscribers: String,
      category: String,
    },
    instagram: {
      channel: String,
      subscribers: String,
      category: String,
    },
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

InfluencerSchema.pre("save", function (next) {
  let now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
      this.created_at = now;
  }
  next();
});

export default mongoose.model<IInfluencer>("Influencer", InfluencerSchema);

// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from "typeorm";
// import { IInfluencer } from "@modules/influencers/domain/models/IInfluencer";

// @Entity("influencers")
// class Influencer implements IInfluencer {
//   @PrimaryGeneratedColumn("uuid")
//   _id: string;

//   @Column()
//   name: string;

//   @Column()
//   email: string;

//   @Column()
//   platforms: {
//     twitter: {
//       channel: string;
//       subscribers: number;
//       category: string;
//     };
//     instagram: {
//       channel: string;
//       subscribers: number;
//       category: string;
//     };
//   };

//   @CreateDateColumn()
//   created_at: Date;

//   @UpdateDateColumn()
//   updated_at: Date;
// }

// export default Influencer;
