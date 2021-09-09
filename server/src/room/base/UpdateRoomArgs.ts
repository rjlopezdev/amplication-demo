import { ArgsType, Field } from "@nestjs/graphql";
import { RoomWhereUniqueInput } from "./RoomWhereUniqueInput";
import { RoomUpdateInput } from "./RoomUpdateInput";

@ArgsType()
class UpdateRoomArgs {
  @Field(() => RoomWhereUniqueInput, { nullable: false })
  where!: RoomWhereUniqueInput;
  @Field(() => RoomUpdateInput, { nullable: false })
  data!: RoomUpdateInput;
}

export { UpdateRoomArgs };
