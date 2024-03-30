export interface AI_Model {
  id: number | null;
  name: string;
  description: string;
  creator: string;
  tag: string;
  versions: Version[];
  pricing: string[];
  profile_image_url: string;
  cover_image_url: string;
  likes: number;
  views: number;
}

export interface Version {
  version_name: string;
  pricing: string;
}
