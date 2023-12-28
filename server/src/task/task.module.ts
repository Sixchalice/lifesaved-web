import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TaskModuleBase } from "./base/task.module.base";
import { TaskService } from "./task.service";
import { TaskController } from "./task.controller";
import { TaskResolver } from "./task.resolver";

@Module({
  imports: [TaskModuleBase, forwardRef(() => AuthModule)],
  controllers: [TaskController],
  providers: [TaskService, TaskResolver],
  exports: [TaskService],
})
export class TaskModule {}
