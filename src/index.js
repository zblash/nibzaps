import { NibzbsService } from "./NibzapsService";
import { NibzapsFetch } from "./NibzapsFetch";
import { NibzapsAxios } from "./NibzapsAxios";

function Nibzaps(configs) {
  return new NibzbsService(...configs);
}

export { NibzbsService, Nibzaps, NibzapsFetch, NibzapsAxios };
