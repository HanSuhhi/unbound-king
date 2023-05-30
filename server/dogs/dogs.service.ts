import { Injectable } from "@nestjs/common";
import { CatsService } from "../cats/cats.service";

@Injectable()
export class DogsService {
  constructor(private readonly catsService: CatsService) {}
}
