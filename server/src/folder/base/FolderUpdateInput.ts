/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TaskUpdateManyWithoutFoldersInput } from "./TaskUpdateManyWithoutFoldersInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class FolderUpdateInput {
  @ApiProperty({
    required: false,
    type: () => TaskUpdateManyWithoutFoldersInput,
  })
  @ValidateNested()
  @Type(() => TaskUpdateManyWithoutFoldersInput)
  @IsOptional()
  @Field(() => TaskUpdateManyWithoutFoldersInput, {
    nullable: true,
  })
  tasks?: TaskUpdateManyWithoutFoldersInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  uid?: UserWhereUniqueInput;
}

export { FolderUpdateInput as FolderUpdateInput };
