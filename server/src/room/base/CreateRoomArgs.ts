import { ArgsType, Field } from "@nestjs/graphql";
import { RoomCreateInput } from "./RoomCreateInput";

@ArgsType()
class CreateRoomArgs {
  @Field(() => RoomCreateInput, { nullable: false })
  data!: RoomCreateInput;
}

export { CreateRoomArgs };
