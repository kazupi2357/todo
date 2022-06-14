import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { UsersService } from 'src/users/users.service';
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}

    @Query(() => User)
    user(
        @Args() args: FindFirstUserArgs
    ) {
        return this.userService.findFirst(args)
    }

    @Mutation(() => User)
    createUser(
        @Args() args: CreateOneUserArgs
    ) {
        return this.userService.createUser(args)
    }

    @Mutation(() => User)
    Update(
        @Args() args: UpdateOneUserArgs
    ) {
        return this.userService.Update(args)
    }
}