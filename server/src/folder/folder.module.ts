import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FolderModuleBase } from "./base/folder.module.base";
import { FolderService } from "./folder.service";
import { FolderController } from "./folder.controller";
import { FolderResolver } from "./folder.resolver";

@Module({
  imports: [FolderModuleBase, forwardRef(() => AuthModule)],
  controllers: [FolderController],
  providers: [FolderService, FolderResolver],
  exports: [FolderService],
})
export class FolderModule {}
