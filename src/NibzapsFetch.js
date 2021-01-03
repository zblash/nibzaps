import { compose } from "./compose";

export function NibzapsFetch(builderFunc, fetchOptions) {
  return compose(fetch, builderFunc, fetchOptions);
}
