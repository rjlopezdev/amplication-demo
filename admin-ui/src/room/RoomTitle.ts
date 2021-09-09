import { Room as TRoom } from "../api/room/Room";

export const ROOM_TITLE_FIELD = "name";

export const RoomTitle = (record: TRoom) => {
  return record.name;
};
