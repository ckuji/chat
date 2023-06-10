import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { Repository } from "typeorm"
import { CreateUserDto } from "./dto/create-user.dto"
let bcrypt = require('bcryptjs')

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    getAllUsers = (): Promise<User[]> => {
        return this.userRepository.find()
    }

    createUser = async (userFields: CreateUserDto): Promise<User> => {
        const hashedPassword = await bcrypt.hash(userFields.password, 12)
        const user = this.userRepository.create({...userFields, password: hashedPassword})
        return await this.userRepository.save(user)
    }

    findOne = async (name: string): Promise<User | undefined> => {
        const user = await this.userRepository.findOne({
            where: {
                nickname: name
            }
        })
        return user || undefined
    }
}