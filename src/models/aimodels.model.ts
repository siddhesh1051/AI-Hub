export interface AI_Model {
  id: string;
  name: string;
  description: string;
  creator: string;
  tag: string;
  versions_available: string[];
  pricing: string[];
  profile_image_url: string;
  cover_image_url: string;
  likes: number;
  views: number;
}
