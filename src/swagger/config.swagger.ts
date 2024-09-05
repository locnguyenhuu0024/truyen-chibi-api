import { Type, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { IPageResult } from 'src/utils/common/base.service';

export const ApiOkResponsePaginated = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(IPageResult, dataDto),
    ApiOkResponse({
      status: 200,
      description: 'success',
      schema: {
        allOf: [
          { $ref: getSchemaPath(IPageResult) },
          {
            properties: {
              rows: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
  );
