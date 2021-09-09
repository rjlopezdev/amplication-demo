import { ArgsType, Field } from "@nestjs/graphql";
import { RoomWhereUniqueInput } from "./RoomWhereUniqueInput";

@ArgsType()
class DeleteRoomArgs {
  @Field(() => RoomWhereUniqueInput, { nullable: false })
  where!: RoomWhereUniqueInput;
}

export { DeleteRoomArgs };
