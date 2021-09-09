import { ArgsType, Field } from "@nestjs/graphql";
import { RoomWhereUniqueInput } from "./RoomWhereUniqueInput";

@ArgsType()
class RoomFindUniqueArgs {
  @Field(() => RoomWhereUniqueInput, { nullable: false })
  where!: RoomWhereUniqueInput;
}

export { RoomFindUniqueArgs };
