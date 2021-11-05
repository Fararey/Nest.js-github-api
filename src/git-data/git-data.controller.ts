import { Controller, Get, Param } from '@nestjs/common';
import { GidDataService } from './git-data.service';
import { CommitOnlyWithHash } from './interfaces/commit-only-with-hash.interface';
import { CommitOnlyWithMessage } from './interfaces/commit-only-with-message.interface';

@Controller('last25commits')
export class GitDataController {
  constructor(private gidDataService: GidDataService) {}

  @Get(':branchName')
  async getLast25CommitsFromBranch(@Param() params): Promise<any[]> {
    const last25commits = await this.gidDataService.getLast25CommitsFromBranch(
      params.branchName,
    );
    return last25commits;
  }

  @Get(':branchName/only-message')
  async findCommitsFromBranchAndLeaveOnlyMessages(
    @Param() params,
  ): Promise<CommitOnlyWithMessage[]> {
    const last25commitMessages =
      await this.gidDataService.getLast25CommitsFromBranchAndLeaveOnlyCommitMessage(
        params.branchName,
      );
    return last25commitMessages;
  }

  @Get(':branchName/only-hash')
  async findCommitsFromBranchAndLeaveOnlyHash(
    @Param() params,
  ): Promise<CommitOnlyWithHash[]> {
    const last25commitHashes =
      await this.gidDataService.getLast25CommitsFromBranchAndLeaveOnlyCommitHash(
        params.branchName,
      );

    return last25commitHashes;
  }
}
