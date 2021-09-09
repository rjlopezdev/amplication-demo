import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoomWhereInput } from "./RoomWhereInput";
import { Type } from "class-transformer";
import { RoomOrderByInput } from "./RoomOrderByInput";

@ArgsType()
class RoomFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RoomWhereInput,
  })
  @Field(() => RoomWhereInput, { nullable: true })
  @Type(() => RoomWhereInput)
  where?: RoomWhereInput;

  @ApiProperty({
    required: false,
    type: RoomOrderByInput,
  })
  @Field(() => RoomOrderByInput, { nullable: true })
  @Type(() => RoomOrderByInput)
  orderBy?: RoomOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RoomFindManyArgs };
