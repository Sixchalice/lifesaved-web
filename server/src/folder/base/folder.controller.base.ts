/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FolderService } from "../folder.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FolderCreateInput } from "./FolderCreateInput";
import { Folder } from "./Folder";
import { FolderFindManyArgs } from "./FolderFindManyArgs";
import { FolderWhereUniqueInput } from "./FolderWhereUniqueInput";
import { FolderUpdateInput } from "./FolderUpdateInput";
import { TaskFindManyArgs } from "../../task/base/TaskFindManyArgs";
import { Task } from "../../task/base/Task";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FolderControllerBase {
  constructor(
    protected readonly service: FolderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Folder })
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFolder(@common.Body() data: FolderCreateInput): Promise<Folder> {
    return await this.service.createFolder({
      data: {
        ...data,

        uid: {
          connect: data.uid,
        },
      },
      select: {
        createdAt: true,
        id: true,
        name: true,

        uid: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Folder] })
  @ApiNestedQuery(FolderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async folders(@common.Req() request: Request): Promise<Folder[]> {
    const args = plainToClass(FolderFindManyArgs, request.query);
    return this.service.folders({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,

        uid: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Folder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async folder(
    @common.Param() params: FolderWhereUniqueInput
  ): Promise<Folder | null> {
    const result = await this.service.folder({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,

        uid: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Folder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFolder(
    @common.Param() params: FolderWhereUniqueInput,
    @common.Body() data: FolderUpdateInput
  ): Promise<Folder | null> {
    try {
      return await this.service.updateFolder({
        where: params,
        data: {
          ...data,

          uid: {
            connect: data.uid,
          },
        },
        select: {
          createdAt: true,
          id: true,
          name: true,

          uid: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Folder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFolder(
    @common.Param() params: FolderWhereUniqueInput
  ): Promise<Folder | null> {
    try {
      return await this.service.deleteFolder({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,

          uid: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/tasks")
  @ApiNestedQuery(TaskFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "read",
    possession: "any",
  })
  async findTasks(
    @common.Req() request: Request,
    @common.Param() params: FolderWhereUniqueInput
  ): Promise<Task[]> {
    const query = plainToClass(TaskFindManyArgs, request.query);
    const results = await this.service.findTasks(params.id, {
      ...query,
      select: {
        createdAt: true,

        fid: {
          select: {
            id: true,
          },
        },

        id: true,
        text: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/tasks")
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "update",
    possession: "any",
  })
  async connectTasks(
    @common.Param() params: FolderWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        connect: body,
      },
    };
    await this.service.updateFolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tasks")
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "update",
    possession: "any",
  })
  async updateTasks(
    @common.Param() params: FolderWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        set: body,
      },
    };
    await this.service.updateFolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tasks")
  @nestAccessControl.UseRoles({
    resource: "Folder",
    action: "update",
    possession: "any",
  })
  async disconnectTasks(
    @common.Param() params: FolderWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        disconnect: body,
      },
    };
    await this.service.updateFolder({
      where: params,
      data,
      select: { id: true },
    });
  }
}
