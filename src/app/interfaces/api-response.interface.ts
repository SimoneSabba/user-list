import { User, UserApi } from './user.interface';

interface Pagination {
  count: number,
  hasMoreItems: boolean,
  totalItems: number,
  skipCount: number,
  maxItems: number
}

interface ListResponse {
  pagination: Pagination,
  entries: UserApi[]
}

export interface ApiResponse {
  list: ListResponse
}