import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // TODO loren ipsun
    var a = 1;
    var b = 2;
    var c = 3;
    if (a > 1) {
      a = 1;
    } else if (a > 2) {
      a = 2;
    } else if (a > 3) {
      a = 3;
    } else if (a > 4) {
      a = 4;
    }
    return a.toString();
  }
}
