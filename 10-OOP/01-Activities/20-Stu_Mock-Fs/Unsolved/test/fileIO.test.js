const FileIO = require('../fileIO');
const fs = require("fs");
const { hasUncaughtExceptionCaptureCallback } = require('process');

jest.mock("fs");

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const fileIO = new FileIO();
      const file = "message.txt";

      fs.readFileSync.mockReturnValue("Hello World!")

      let data = fileIO.read(file)

      expect(data).toEqual('Hello World!')
      expect(fs.readFileSync).lastCalledWith(file, "utf8");
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      const fileIO = new FileIO();
      const path = "message.txt";
      const data = "Hello World!";

      fs.writeFileSync.mockReturnValue("Hello World!")
      const writeFileResponse = fileIO.write(path, data);
      });
    });
  });
