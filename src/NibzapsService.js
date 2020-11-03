export const GET = "GET";
export const POST = "POST";
export const DELETE = "DELETE";
export const PUT = "PUT";
export const CONTENT_TYPE = "application/json; charset=utf-8";

export function NibzapsService(url, data, contentType) {
  this._construct();
  if (url) {
    this._request.url = url;
  }
  if (data) {
    this._request.data = data;
  }
  if (contentType) {
    this._request.contentType = data;
  } else {
    this._request.contentType = CONTENT_TYPE;
  }
}
NibzapsService.prototype._construct = function () {
  this._request = {};
  this._setMethod = function (method) {
    this._request.method = method;
  };
};
NibzapsService.prototype.setUrl = function (url) {
  this._request.url = url;
  return this;
};

NibzapsService.prototype.setData = function (data) {
  Object.defineProperty(this._request, "data", {
    value: data,
    writable: false,
    enumerable: true,
  });
  return this;
};

NibzapsService.prototype.setContentType = function (contentType) {
  Object.defineProperty(this._request, "contentType", {
    value: contentType,
    writable: false,
    enumerable: true,
  });
  return this;
};

NibzapsService.prototype.setDataType = function (dataType) {
  Object.defineProperty(this._request, "dataType", {
    value: dataType,
    writable: false,
    enumerable: true,
  });
  return this;
};

NibzapsService.prototype.setCache = function (cache) {
  Object.defineProperty(this._request, "cache", {
    value: cache,
    writable: false,
    enumerable: true,
  });
  return this;
};

NibzapsService.prototype.get = function () {
  this._setMethod(GET);
  Object.freeze(this._request);
  return this._request;
};

NibzapsService.prototype.post = function () {
  this._setMethod(POST);
  Object.freeze(this._request);
  return this._request;
};

NibzapsService.prototype.put = function () {
  this._setMethod(PUT);
  Object.freeze(this._request);
  return this._request;
};

NibzapsService.prototype.del = function () {
  this._setMethod(DELETE);
  Object.freeze(this._request);
  return this._request;
};
