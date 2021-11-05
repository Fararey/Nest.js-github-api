import { Controller, Get } from '@nestjs/common';

interface Routes {
  last25commitsFromBranch: string;
  last25commitsFromBranchOnlyMessage: string;
  last25commitsFromBranchOnlyHash: string;
}

@Controller()
export class AppController {
  @Get()
  Hello(): Routes {
    return {
      last25commitsFromBranch:
        'https://nodejs-node-commits.herokuapp.com/last25commits/:branch',
      last25commitsFromBranchOnlyMessage:
        'https://nodejs-node-commits.herokuapp.com/last25commits/:branch/only-message',
      last25commitsFromBranchOnlyHash:
        'https://nodejs-node-commits.herokuapp.com/last25commits/:branch/only-hash',
    };
  }
}
