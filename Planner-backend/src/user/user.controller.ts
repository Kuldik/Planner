import { Controller } from '@nestjs/common'
import { UserService } from './user.service'
;('./dto/update-user.dto')

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}
}
