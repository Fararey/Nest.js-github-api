import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CommitOnlyWithHash } from './interfaces/commit-only-with-hash.interface';
import { CommitOnlyWithMessage } from './interfaces/commit-only-with-message.interface';

import axios from 'axios';

@Injectable()
export class GidDataService {
  constructor(private httpService: HttpService) {}

  async getLast25CommitsFromBranchAndLeaveOnlyCommitMessage(
    branchName: string,
  ): Promise<CommitOnlyWithMessage[]> {
    const last25commits = await this.getLast25CommitsFromBranch(branchName);
    return last25commits.map((commit) => commit.commit.message);
  }

  async getLast25CommitsFromBranchAndLeaveOnlyCommitHash(
    branchName: string,
  ): Promise<CommitOnlyWithHash[]> {
    const last25commits = await this.getLast25CommitsFromBranch(branchName);
    return last25commits.map((commit) => commit.sha);
  }

  async getLast25CommitsFromBranch(branchName: string): Promise<any[]> {
    const allCommits = await axios
      .get(`https://api.github.com/repos/nodejs/node/commits?sha=${branchName}`)
      .then(({ data }) => data)
      .catch(() => []);
    const last25commits = [];
    for (let i = 0; i < allCommits.length; i += 1) {
      if (i === 25) break;
      last25commits.push(allCommits[i]);
    }

    return last25commits;
  }
}
