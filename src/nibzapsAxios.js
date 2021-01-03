import { compose } from "./compose";

export function NibzapsAios(builderFunc, fetchOptions) {
  return compose(fetch, builderFunc, fetchOptions);
}
