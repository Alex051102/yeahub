export type Specialization = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: {
    id: string;
    username: string;
  };
};

export interface SpecializationResponse {
  total: number;
  page: number;
  limit: number;
  data: Specialization[];
}

export interface GetSpecializationParams {
  page?: number;
  limit?: number;
  title?: string;
}
