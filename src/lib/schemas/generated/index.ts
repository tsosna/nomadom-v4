import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const ProjectScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','slug','path','name','icon','imgId']);

export const ImgScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','hash','url','alt','caption']);

export const ElevationScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','name','imgId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////

export const ProjectSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  slug: z.string(),
  path: z.string(),
  name: z.string(),
  icon: z.string().nullable(),
  imgId: z.number().int(),
})

export type Project = z.infer<typeof ProjectSchema>

/////////////////////////////////////////
// IMG SCHEMA
/////////////////////////////////////////

export const ImgSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  hash: z.string(),
  url: z.string(),
  alt: z.string().nullable(),
  caption: z.string().nullable(),
})

export type Img = z.infer<typeof ImgSchema>

/////////////////////////////////////////
// ELEVATION SCHEMA
/////////////////////////////////////////

export const ElevationSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  imgId: z.number().int(),
})

export type Elevation = z.infer<typeof ElevationSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PROJECT
//------------------------------------------------------

export const ProjectIncludeSchema: z.ZodType<Prisma.ProjectInclude> = z.object({
  img: z.union([z.boolean(),z.lazy(() => ImgArgsSchema)]).optional(),
}).strict()

export const ProjectArgsSchema: z.ZodType<Prisma.ProjectDefaultArgs> = z.object({
  select: z.lazy(() => ProjectSelectSchema).optional(),
  include: z.lazy(() => ProjectIncludeSchema).optional(),
}).strict();

export const ProjectSelectSchema: z.ZodType<Prisma.ProjectSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  slug: z.boolean().optional(),
  path: z.boolean().optional(),
  name: z.boolean().optional(),
  icon: z.boolean().optional(),
  imgId: z.boolean().optional(),
  img: z.union([z.boolean(),z.lazy(() => ImgArgsSchema)]).optional(),
}).strict()

// IMG
//------------------------------------------------------

export const ImgIncludeSchema: z.ZodType<Prisma.ImgInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  elevation: z.union([z.boolean(),z.lazy(() => ElevationArgsSchema)]).optional(),
}).strict()

export const ImgArgsSchema: z.ZodType<Prisma.ImgDefaultArgs> = z.object({
  select: z.lazy(() => ImgSelectSchema).optional(),
  include: z.lazy(() => ImgIncludeSchema).optional(),
}).strict();

export const ImgSelectSchema: z.ZodType<Prisma.ImgSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  hash: z.boolean().optional(),
  url: z.boolean().optional(),
  alt: z.boolean().optional(),
  caption: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  elevation: z.union([z.boolean(),z.lazy(() => ElevationArgsSchema)]).optional(),
}).strict()

// ELEVATION
//------------------------------------------------------

export const ElevationIncludeSchema: z.ZodType<Prisma.ElevationInclude> = z.object({
  img: z.union([z.boolean(),z.lazy(() => ImgArgsSchema)]).optional(),
}).strict()

export const ElevationArgsSchema: z.ZodType<Prisma.ElevationDefaultArgs> = z.object({
  select: z.lazy(() => ElevationSelectSchema).optional(),
  include: z.lazy(() => ElevationIncludeSchema).optional(),
}).strict();

export const ElevationSelectSchema: z.ZodType<Prisma.ElevationSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  imgId: z.boolean().optional(),
  img: z.union([z.boolean(),z.lazy(() => ImgArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ProjectWhereInputSchema: z.ZodType<Prisma.ProjectWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  imgId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  img: z.union([ z.lazy(() => ImgRelationFilterSchema),z.lazy(() => ImgWhereInputSchema) ]).optional(),
}).strict();

export const ProjectOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional(),
  img: z.lazy(() => ImgOrderByWithRelationInputSchema).optional()
}).strict();

export const ProjectWhereUniqueInputSchema: z.ZodType<Prisma.ProjectWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    slug: z.string(),
    imgId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
    slug: z.string(),
  }),
  z.object({
    id: z.number().int(),
    imgId: z.number().int(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    slug: z.string(),
    imgId: z.number().int(),
  }),
  z.object({
    slug: z.string(),
  }),
  z.object({
    imgId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  slug: z.string().optional(),
  imgId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  img: z.union([ z.lazy(() => ImgRelationFilterSchema),z.lazy(() => ImgWhereInputSchema) ]).optional(),
}).strict());

export const ProjectOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProjectCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProjectAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProjectMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProjectMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProjectSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProjectScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  path: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  imgId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ImgWhereInputSchema: z.ZodType<Prisma.ImgWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ImgWhereInputSchema),z.lazy(() => ImgWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImgWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImgWhereInputSchema),z.lazy(() => ImgWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  hash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectNullableRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional().nullable(),
  elevation: z.union([ z.lazy(() => ElevationNullableRelationFilterSchema),z.lazy(() => ElevationWhereInputSchema) ]).optional().nullable(),
}).strict();

export const ImgOrderByWithRelationInputSchema: z.ZodType<Prisma.ImgOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  elevation: z.lazy(() => ElevationOrderByWithRelationInputSchema).optional()
}).strict();

export const ImgWhereUniqueInputSchema: z.ZodType<Prisma.ImgWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    hash: z.string(),
    url: z.string()
  }),
  z.object({
    id: z.number().int(),
    hash: z.string(),
  }),
  z.object({
    id: z.number().int(),
    url: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    hash: z.string(),
    url: z.string(),
  }),
  z.object({
    hash: z.string(),
  }),
  z.object({
    url: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  hash: z.string().optional(),
  url: z.string().optional(),
  AND: z.union([ z.lazy(() => ImgWhereInputSchema),z.lazy(() => ImgWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImgWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImgWhereInputSchema),z.lazy(() => ImgWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectNullableRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional().nullable(),
  elevation: z.union([ z.lazy(() => ElevationNullableRelationFilterSchema),z.lazy(() => ElevationWhereInputSchema) ]).optional().nullable(),
}).strict());

export const ImgOrderByWithAggregationInputSchema: z.ZodType<Prisma.ImgOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  alt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  caption: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ImgCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ImgAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ImgMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ImgMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ImgSumOrderByAggregateInputSchema).optional()
}).strict();

export const ImgScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ImgScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ImgScalarWhereWithAggregatesInputSchema),z.lazy(() => ImgScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImgScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImgScalarWhereWithAggregatesInputSchema),z.lazy(() => ImgScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  hash: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  alt: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  caption: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ElevationWhereInputSchema: z.ZodType<Prisma.ElevationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ElevationWhereInputSchema),z.lazy(() => ElevationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ElevationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ElevationWhereInputSchema),z.lazy(() => ElevationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  imgId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  img: z.union([ z.lazy(() => ImgRelationFilterSchema),z.lazy(() => ImgWhereInputSchema) ]).optional(),
}).strict();

export const ElevationOrderByWithRelationInputSchema: z.ZodType<Prisma.ElevationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional(),
  img: z.lazy(() => ImgOrderByWithRelationInputSchema).optional()
}).strict();

export const ElevationWhereUniqueInputSchema: z.ZodType<Prisma.ElevationWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    imgId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    imgId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  imgId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ElevationWhereInputSchema),z.lazy(() => ElevationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ElevationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ElevationWhereInputSchema),z.lazy(() => ElevationWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  img: z.union([ z.lazy(() => ImgRelationFilterSchema),z.lazy(() => ImgWhereInputSchema) ]).optional(),
}).strict());

export const ElevationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ElevationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ElevationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ElevationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ElevationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ElevationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ElevationSumOrderByAggregateInputSchema).optional()
}).strict();

export const ElevationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ElevationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ElevationScalarWhereWithAggregatesInputSchema),z.lazy(() => ElevationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ElevationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ElevationScalarWhereWithAggregatesInputSchema),z.lazy(() => ElevationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  imgId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ProjectCreateInputSchema: z.ZodType<Prisma.ProjectCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  path: z.string(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  img: z.lazy(() => ImgCreateNestedOneWithoutProjectInputSchema)
}).strict();

export const ProjectUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  path: z.string(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  imgId: z.number().int()
}).strict();

export const ProjectUpdateInputSchema: z.ZodType<Prisma.ProjectUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  img: z.lazy(() => ImgUpdateOneRequiredWithoutProjectNestedInputSchema).optional()
}).strict();

export const ProjectUncheckedUpdateInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imgId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProjectCreateManyInputSchema: z.ZodType<Prisma.ProjectCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  path: z.string(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  imgId: z.number().int()
}).strict();

export const ProjectUpdateManyMutationInputSchema: z.ZodType<Prisma.ProjectUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProjectUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imgId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImgCreateInputSchema: z.ZodType<Prisma.ImgCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  hash: z.string(),
  url: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutImgInputSchema).optional(),
  elevation: z.lazy(() => ElevationCreateNestedOneWithoutImgInputSchema).optional()
}).strict();

export const ImgUncheckedCreateInputSchema: z.ZodType<Prisma.ImgUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  hash: z.string(),
  url: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  project: z.lazy(() => ProjectUncheckedCreateNestedOneWithoutImgInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedCreateNestedOneWithoutImgInputSchema).optional()
}).strict();

export const ImgUpdateInputSchema: z.ZodType<Prisma.ImgUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project: z.lazy(() => ProjectUpdateOneWithoutImgNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUpdateOneWithoutImgNestedInputSchema).optional()
}).strict();

export const ImgUncheckedUpdateInputSchema: z.ZodType<Prisma.ImgUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project: z.lazy(() => ProjectUncheckedUpdateOneWithoutImgNestedInputSchema).optional(),
  elevation: z.lazy(() => ElevationUncheckedUpdateOneWithoutImgNestedInputSchema).optional()
}).strict();

export const ImgCreateManyInputSchema: z.ZodType<Prisma.ImgCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  hash: z.string(),
  url: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable()
}).strict();

export const ImgUpdateManyMutationInputSchema: z.ZodType<Prisma.ImgUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ImgUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ImgUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ElevationCreateInputSchema: z.ZodType<Prisma.ElevationCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  img: z.lazy(() => ImgCreateNestedOneWithoutElevationInputSchema)
}).strict();

export const ElevationUncheckedCreateInputSchema: z.ZodType<Prisma.ElevationUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  imgId: z.number().int()
}).strict();

export const ElevationUpdateInputSchema: z.ZodType<Prisma.ElevationUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  img: z.lazy(() => ImgUpdateOneRequiredWithoutElevationNestedInputSchema).optional()
}).strict();

export const ElevationUncheckedUpdateInputSchema: z.ZodType<Prisma.ElevationUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imgId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ElevationCreateManyInputSchema: z.ZodType<Prisma.ElevationCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string(),
  imgId: z.number().int()
}).strict();

export const ElevationUpdateManyMutationInputSchema: z.ZodType<Prisma.ElevationUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ElevationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ElevationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imgId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ImgRelationFilterSchema: z.ZodType<Prisma.ImgRelationFilter> = z.object({
  is: z.lazy(() => ImgWhereInputSchema).optional(),
  isNot: z.lazy(() => ImgWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const ProjectCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProjectSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const ProjectNullableRelationFilterSchema: z.ZodType<Prisma.ProjectNullableRelationFilter> = z.object({
  is: z.lazy(() => ProjectWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProjectWhereInputSchema).optional().nullable()
}).strict();

export const ElevationNullableRelationFilterSchema: z.ZodType<Prisma.ElevationNullableRelationFilter> = z.object({
  is: z.lazy(() => ElevationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ElevationWhereInputSchema).optional().nullable()
}).strict();

export const ImgCountOrderByAggregateInputSchema: z.ZodType<Prisma.ImgCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImgAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ImgAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImgMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ImgMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImgMinOrderByAggregateInputSchema: z.ZodType<Prisma.ImgMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  hash: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  alt: z.lazy(() => SortOrderSchema).optional(),
  caption: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImgSumOrderByAggregateInputSchema: z.ZodType<Prisma.ImgSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ElevationCountOrderByAggregateInputSchema: z.ZodType<Prisma.ElevationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ElevationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ElevationAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ElevationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ElevationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ElevationMinOrderByAggregateInputSchema: z.ZodType<Prisma.ElevationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ElevationSumOrderByAggregateInputSchema: z.ZodType<Prisma.ElevationSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  imgId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImgCreateNestedOneWithoutProjectInputSchema: z.ZodType<Prisma.ImgCreateNestedOneWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => ImgCreateWithoutProjectInputSchema),z.lazy(() => ImgUncheckedCreateWithoutProjectInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImgCreateOrConnectWithoutProjectInputSchema).optional(),
  connect: z.lazy(() => ImgWhereUniqueInputSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const ImgUpdateOneRequiredWithoutProjectNestedInputSchema: z.ZodType<Prisma.ImgUpdateOneRequiredWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImgCreateWithoutProjectInputSchema),z.lazy(() => ImgUncheckedCreateWithoutProjectInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImgCreateOrConnectWithoutProjectInputSchema).optional(),
  upsert: z.lazy(() => ImgUpsertWithoutProjectInputSchema).optional(),
  connect: z.lazy(() => ImgWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ImgUpdateToOneWithWhereWithoutProjectInputSchema),z.lazy(() => ImgUpdateWithoutProjectInputSchema),z.lazy(() => ImgUncheckedUpdateWithoutProjectInputSchema) ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ProjectCreateNestedOneWithoutImgInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutImgInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutImgInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutImgInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export const ElevationCreateNestedOneWithoutImgInputSchema: z.ZodType<Prisma.ElevationCreateNestedOneWithoutImgInput> = z.object({
  create: z.union([ z.lazy(() => ElevationCreateWithoutImgInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ElevationCreateOrConnectWithoutImgInputSchema).optional(),
  connect: z.lazy(() => ElevationWhereUniqueInputSchema).optional()
}).strict();

export const ProjectUncheckedCreateNestedOneWithoutImgInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateNestedOneWithoutImgInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutImgInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutImgInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export const ElevationUncheckedCreateNestedOneWithoutImgInputSchema: z.ZodType<Prisma.ElevationUncheckedCreateNestedOneWithoutImgInput> = z.object({
  create: z.union([ z.lazy(() => ElevationCreateWithoutImgInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ElevationCreateOrConnectWithoutImgInputSchema).optional(),
  connect: z.lazy(() => ElevationWhereUniqueInputSchema).optional()
}).strict();

export const ProjectUpdateOneWithoutImgNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutImgNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutImgInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutImgInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutImgInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutImgInputSchema),z.lazy(() => ProjectUpdateWithoutImgInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutImgInputSchema) ]).optional(),
}).strict();

export const ElevationUpdateOneWithoutImgNestedInputSchema: z.ZodType<Prisma.ElevationUpdateOneWithoutImgNestedInput> = z.object({
  create: z.union([ z.lazy(() => ElevationCreateWithoutImgInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ElevationCreateOrConnectWithoutImgInputSchema).optional(),
  upsert: z.lazy(() => ElevationUpsertWithoutImgInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ElevationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ElevationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ElevationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ElevationUpdateToOneWithWhereWithoutImgInputSchema),z.lazy(() => ElevationUpdateWithoutImgInputSchema),z.lazy(() => ElevationUncheckedUpdateWithoutImgInputSchema) ]).optional(),
}).strict();

export const ProjectUncheckedUpdateOneWithoutImgNestedInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateOneWithoutImgNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutImgInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutImgInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutImgInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutImgInputSchema),z.lazy(() => ProjectUpdateWithoutImgInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutImgInputSchema) ]).optional(),
}).strict();

export const ElevationUncheckedUpdateOneWithoutImgNestedInputSchema: z.ZodType<Prisma.ElevationUncheckedUpdateOneWithoutImgNestedInput> = z.object({
  create: z.union([ z.lazy(() => ElevationCreateWithoutImgInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutImgInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ElevationCreateOrConnectWithoutImgInputSchema).optional(),
  upsert: z.lazy(() => ElevationUpsertWithoutImgInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ElevationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ElevationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ElevationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ElevationUpdateToOneWithWhereWithoutImgInputSchema),z.lazy(() => ElevationUpdateWithoutImgInputSchema),z.lazy(() => ElevationUncheckedUpdateWithoutImgInputSchema) ]).optional(),
}).strict();

export const ImgCreateNestedOneWithoutElevationInputSchema: z.ZodType<Prisma.ImgCreateNestedOneWithoutElevationInput> = z.object({
  create: z.union([ z.lazy(() => ImgCreateWithoutElevationInputSchema),z.lazy(() => ImgUncheckedCreateWithoutElevationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImgCreateOrConnectWithoutElevationInputSchema).optional(),
  connect: z.lazy(() => ImgWhereUniqueInputSchema).optional()
}).strict();

export const ImgUpdateOneRequiredWithoutElevationNestedInputSchema: z.ZodType<Prisma.ImgUpdateOneRequiredWithoutElevationNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImgCreateWithoutElevationInputSchema),z.lazy(() => ImgUncheckedCreateWithoutElevationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImgCreateOrConnectWithoutElevationInputSchema).optional(),
  upsert: z.lazy(() => ImgUpsertWithoutElevationInputSchema).optional(),
  connect: z.lazy(() => ImgWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ImgUpdateToOneWithWhereWithoutElevationInputSchema),z.lazy(() => ImgUpdateWithoutElevationInputSchema),z.lazy(() => ImgUncheckedUpdateWithoutElevationInputSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ImgCreateWithoutProjectInputSchema: z.ZodType<Prisma.ImgCreateWithoutProjectInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  hash: z.string(),
  url: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  elevation: z.lazy(() => ElevationCreateNestedOneWithoutImgInputSchema).optional()
}).strict();

export const ImgUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.ImgUncheckedCreateWithoutProjectInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  hash: z.string(),
  url: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  elevation: z.lazy(() => ElevationUncheckedCreateNestedOneWithoutImgInputSchema).optional()
}).strict();

export const ImgCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.ImgCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => ImgWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ImgCreateWithoutProjectInputSchema),z.lazy(() => ImgUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export const ImgUpsertWithoutProjectInputSchema: z.ZodType<Prisma.ImgUpsertWithoutProjectInput> = z.object({
  update: z.union([ z.lazy(() => ImgUpdateWithoutProjectInputSchema),z.lazy(() => ImgUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => ImgCreateWithoutProjectInputSchema),z.lazy(() => ImgUncheckedCreateWithoutProjectInputSchema) ]),
  where: z.lazy(() => ImgWhereInputSchema).optional()
}).strict();

export const ImgUpdateToOneWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.ImgUpdateToOneWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => ImgWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ImgUpdateWithoutProjectInputSchema),z.lazy(() => ImgUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export const ImgUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ImgUpdateWithoutProjectInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  elevation: z.lazy(() => ElevationUpdateOneWithoutImgNestedInputSchema).optional()
}).strict();

export const ImgUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ImgUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  elevation: z.lazy(() => ElevationUncheckedUpdateOneWithoutImgNestedInputSchema).optional()
}).strict();

export const ProjectCreateWithoutImgInputSchema: z.ZodType<Prisma.ProjectCreateWithoutImgInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  path: z.string(),
  name: z.string(),
  icon: z.string().optional().nullable()
}).strict();

export const ProjectUncheckedCreateWithoutImgInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutImgInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  path: z.string(),
  name: z.string(),
  icon: z.string().optional().nullable()
}).strict();

export const ProjectCreateOrConnectWithoutImgInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutImgInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutImgInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutImgInputSchema) ]),
}).strict();

export const ElevationCreateWithoutImgInputSchema: z.ZodType<Prisma.ElevationCreateWithoutImgInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string()
}).strict();

export const ElevationUncheckedCreateWithoutImgInputSchema: z.ZodType<Prisma.ElevationUncheckedCreateWithoutImgInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string()
}).strict();

export const ElevationCreateOrConnectWithoutImgInputSchema: z.ZodType<Prisma.ElevationCreateOrConnectWithoutImgInput> = z.object({
  where: z.lazy(() => ElevationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ElevationCreateWithoutImgInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutImgInputSchema) ]),
}).strict();

export const ProjectUpsertWithoutImgInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutImgInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutImgInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutImgInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutImgInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutImgInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export const ProjectUpdateToOneWithWhereWithoutImgInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutImgInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutImgInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutImgInputSchema) ]),
}).strict();

export const ProjectUpdateWithoutImgInputSchema: z.ZodType<Prisma.ProjectUpdateWithoutImgInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProjectUncheckedUpdateWithoutImgInputSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutImgInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ElevationUpsertWithoutImgInputSchema: z.ZodType<Prisma.ElevationUpsertWithoutImgInput> = z.object({
  update: z.union([ z.lazy(() => ElevationUpdateWithoutImgInputSchema),z.lazy(() => ElevationUncheckedUpdateWithoutImgInputSchema) ]),
  create: z.union([ z.lazy(() => ElevationCreateWithoutImgInputSchema),z.lazy(() => ElevationUncheckedCreateWithoutImgInputSchema) ]),
  where: z.lazy(() => ElevationWhereInputSchema).optional()
}).strict();

export const ElevationUpdateToOneWithWhereWithoutImgInputSchema: z.ZodType<Prisma.ElevationUpdateToOneWithWhereWithoutImgInput> = z.object({
  where: z.lazy(() => ElevationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ElevationUpdateWithoutImgInputSchema),z.lazy(() => ElevationUncheckedUpdateWithoutImgInputSchema) ]),
}).strict();

export const ElevationUpdateWithoutImgInputSchema: z.ZodType<Prisma.ElevationUpdateWithoutImgInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ElevationUncheckedUpdateWithoutImgInputSchema: z.ZodType<Prisma.ElevationUncheckedUpdateWithoutImgInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImgCreateWithoutElevationInputSchema: z.ZodType<Prisma.ImgCreateWithoutElevationInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  hash: z.string(),
  url: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutImgInputSchema).optional()
}).strict();

export const ImgUncheckedCreateWithoutElevationInputSchema: z.ZodType<Prisma.ImgUncheckedCreateWithoutElevationInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  hash: z.string(),
  url: z.string(),
  alt: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  project: z.lazy(() => ProjectUncheckedCreateNestedOneWithoutImgInputSchema).optional()
}).strict();

export const ImgCreateOrConnectWithoutElevationInputSchema: z.ZodType<Prisma.ImgCreateOrConnectWithoutElevationInput> = z.object({
  where: z.lazy(() => ImgWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ImgCreateWithoutElevationInputSchema),z.lazy(() => ImgUncheckedCreateWithoutElevationInputSchema) ]),
}).strict();

export const ImgUpsertWithoutElevationInputSchema: z.ZodType<Prisma.ImgUpsertWithoutElevationInput> = z.object({
  update: z.union([ z.lazy(() => ImgUpdateWithoutElevationInputSchema),z.lazy(() => ImgUncheckedUpdateWithoutElevationInputSchema) ]),
  create: z.union([ z.lazy(() => ImgCreateWithoutElevationInputSchema),z.lazy(() => ImgUncheckedCreateWithoutElevationInputSchema) ]),
  where: z.lazy(() => ImgWhereInputSchema).optional()
}).strict();

export const ImgUpdateToOneWithWhereWithoutElevationInputSchema: z.ZodType<Prisma.ImgUpdateToOneWithWhereWithoutElevationInput> = z.object({
  where: z.lazy(() => ImgWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ImgUpdateWithoutElevationInputSchema),z.lazy(() => ImgUncheckedUpdateWithoutElevationInputSchema) ]),
}).strict();

export const ImgUpdateWithoutElevationInputSchema: z.ZodType<Prisma.ImgUpdateWithoutElevationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project: z.lazy(() => ProjectUpdateOneWithoutImgNestedInputSchema).optional()
}).strict();

export const ImgUncheckedUpdateWithoutElevationInputSchema: z.ZodType<Prisma.ImgUncheckedUpdateWithoutElevationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  hash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  alt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  caption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project: z.lazy(() => ProjectUncheckedUpdateOneWithoutImgNestedInputSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ProjectFindFirstArgsSchema: z.ZodType<Prisma.ProjectFindFirstArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereInputSchema.optional(),
  orderBy: z.union([ ProjectOrderByWithRelationInputSchema.array(),ProjectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectScalarFieldEnumSchema,ProjectScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProjectFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProjectFindFirstOrThrowArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereInputSchema.optional(),
  orderBy: z.union([ ProjectOrderByWithRelationInputSchema.array(),ProjectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectScalarFieldEnumSchema,ProjectScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProjectFindManyArgsSchema: z.ZodType<Prisma.ProjectFindManyArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereInputSchema.optional(),
  orderBy: z.union([ ProjectOrderByWithRelationInputSchema.array(),ProjectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectScalarFieldEnumSchema,ProjectScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ProjectAggregateArgsSchema: z.ZodType<Prisma.ProjectAggregateArgs> = z.object({
  where: ProjectWhereInputSchema.optional(),
  orderBy: z.union([ ProjectOrderByWithRelationInputSchema.array(),ProjectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProjectGroupByArgsSchema: z.ZodType<Prisma.ProjectGroupByArgs> = z.object({
  where: ProjectWhereInputSchema.optional(),
  orderBy: z.union([ ProjectOrderByWithAggregationInputSchema.array(),ProjectOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectScalarFieldEnumSchema.array(),
  having: ProjectScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProjectFindUniqueArgsSchema: z.ZodType<Prisma.ProjectFindUniqueArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereUniqueInputSchema,
}).strict()

export const ProjectFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProjectFindUniqueOrThrowArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereUniqueInputSchema,
}).strict()

export const ImgFindFirstArgsSchema: z.ZodType<Prisma.ImgFindFirstArgs> = z.object({
  select: ImgSelectSchema.optional(),
  include: ImgIncludeSchema.optional(),
  where: ImgWhereInputSchema.optional(),
  orderBy: z.union([ ImgOrderByWithRelationInputSchema.array(),ImgOrderByWithRelationInputSchema ]).optional(),
  cursor: ImgWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImgScalarFieldEnumSchema,ImgScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ImgFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ImgFindFirstOrThrowArgs> = z.object({
  select: ImgSelectSchema.optional(),
  include: ImgIncludeSchema.optional(),
  where: ImgWhereInputSchema.optional(),
  orderBy: z.union([ ImgOrderByWithRelationInputSchema.array(),ImgOrderByWithRelationInputSchema ]).optional(),
  cursor: ImgWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImgScalarFieldEnumSchema,ImgScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ImgFindManyArgsSchema: z.ZodType<Prisma.ImgFindManyArgs> = z.object({
  select: ImgSelectSchema.optional(),
  include: ImgIncludeSchema.optional(),
  where: ImgWhereInputSchema.optional(),
  orderBy: z.union([ ImgOrderByWithRelationInputSchema.array(),ImgOrderByWithRelationInputSchema ]).optional(),
  cursor: ImgWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImgScalarFieldEnumSchema,ImgScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ImgAggregateArgsSchema: z.ZodType<Prisma.ImgAggregateArgs> = z.object({
  where: ImgWhereInputSchema.optional(),
  orderBy: z.union([ ImgOrderByWithRelationInputSchema.array(),ImgOrderByWithRelationInputSchema ]).optional(),
  cursor: ImgWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ImgGroupByArgsSchema: z.ZodType<Prisma.ImgGroupByArgs> = z.object({
  where: ImgWhereInputSchema.optional(),
  orderBy: z.union([ ImgOrderByWithAggregationInputSchema.array(),ImgOrderByWithAggregationInputSchema ]).optional(),
  by: ImgScalarFieldEnumSchema.array(),
  having: ImgScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ImgFindUniqueArgsSchema: z.ZodType<Prisma.ImgFindUniqueArgs> = z.object({
  select: ImgSelectSchema.optional(),
  include: ImgIncludeSchema.optional(),
  where: ImgWhereUniqueInputSchema,
}).strict()

export const ImgFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ImgFindUniqueOrThrowArgs> = z.object({
  select: ImgSelectSchema.optional(),
  include: ImgIncludeSchema.optional(),
  where: ImgWhereUniqueInputSchema,
}).strict()

export const ElevationFindFirstArgsSchema: z.ZodType<Prisma.ElevationFindFirstArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereInputSchema.optional(),
  orderBy: z.union([ ElevationOrderByWithRelationInputSchema.array(),ElevationOrderByWithRelationInputSchema ]).optional(),
  cursor: ElevationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ElevationScalarFieldEnumSchema,ElevationScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ElevationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ElevationFindFirstOrThrowArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereInputSchema.optional(),
  orderBy: z.union([ ElevationOrderByWithRelationInputSchema.array(),ElevationOrderByWithRelationInputSchema ]).optional(),
  cursor: ElevationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ElevationScalarFieldEnumSchema,ElevationScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ElevationFindManyArgsSchema: z.ZodType<Prisma.ElevationFindManyArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereInputSchema.optional(),
  orderBy: z.union([ ElevationOrderByWithRelationInputSchema.array(),ElevationOrderByWithRelationInputSchema ]).optional(),
  cursor: ElevationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ElevationScalarFieldEnumSchema,ElevationScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ElevationAggregateArgsSchema: z.ZodType<Prisma.ElevationAggregateArgs> = z.object({
  where: ElevationWhereInputSchema.optional(),
  orderBy: z.union([ ElevationOrderByWithRelationInputSchema.array(),ElevationOrderByWithRelationInputSchema ]).optional(),
  cursor: ElevationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ElevationGroupByArgsSchema: z.ZodType<Prisma.ElevationGroupByArgs> = z.object({
  where: ElevationWhereInputSchema.optional(),
  orderBy: z.union([ ElevationOrderByWithAggregationInputSchema.array(),ElevationOrderByWithAggregationInputSchema ]).optional(),
  by: ElevationScalarFieldEnumSchema.array(),
  having: ElevationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ElevationFindUniqueArgsSchema: z.ZodType<Prisma.ElevationFindUniqueArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereUniqueInputSchema,
}).strict()

export const ElevationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ElevationFindUniqueOrThrowArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereUniqueInputSchema,
}).strict()

export const ProjectCreateArgsSchema: z.ZodType<Prisma.ProjectCreateArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  data: z.union([ ProjectCreateInputSchema,ProjectUncheckedCreateInputSchema ]),
}).strict()

export const ProjectUpsertArgsSchema: z.ZodType<Prisma.ProjectUpsertArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereUniqueInputSchema,
  create: z.union([ ProjectCreateInputSchema,ProjectUncheckedCreateInputSchema ]),
  update: z.union([ ProjectUpdateInputSchema,ProjectUncheckedUpdateInputSchema ]),
}).strict()

export const ProjectCreateManyArgsSchema: z.ZodType<Prisma.ProjectCreateManyArgs> = z.object({
  data: z.union([ ProjectCreateManyInputSchema,ProjectCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ProjectDeleteArgsSchema: z.ZodType<Prisma.ProjectDeleteArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereUniqueInputSchema,
}).strict()

export const ProjectUpdateArgsSchema: z.ZodType<Prisma.ProjectUpdateArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  data: z.union([ ProjectUpdateInputSchema,ProjectUncheckedUpdateInputSchema ]),
  where: ProjectWhereUniqueInputSchema,
}).strict()

export const ProjectUpdateManyArgsSchema: z.ZodType<Prisma.ProjectUpdateManyArgs> = z.object({
  data: z.union([ ProjectUpdateManyMutationInputSchema,ProjectUncheckedUpdateManyInputSchema ]),
  where: ProjectWhereInputSchema.optional(),
}).strict()

export const ProjectDeleteManyArgsSchema: z.ZodType<Prisma.ProjectDeleteManyArgs> = z.object({
  where: ProjectWhereInputSchema.optional(),
}).strict()

export const ImgCreateArgsSchema: z.ZodType<Prisma.ImgCreateArgs> = z.object({
  select: ImgSelectSchema.optional(),
  include: ImgIncludeSchema.optional(),
  data: z.union([ ImgCreateInputSchema,ImgUncheckedCreateInputSchema ]),
}).strict()

export const ImgUpsertArgsSchema: z.ZodType<Prisma.ImgUpsertArgs> = z.object({
  select: ImgSelectSchema.optional(),
  include: ImgIncludeSchema.optional(),
  where: ImgWhereUniqueInputSchema,
  create: z.union([ ImgCreateInputSchema,ImgUncheckedCreateInputSchema ]),
  update: z.union([ ImgUpdateInputSchema,ImgUncheckedUpdateInputSchema ]),
}).strict()

export const ImgCreateManyArgsSchema: z.ZodType<Prisma.ImgCreateManyArgs> = z.object({
  data: z.union([ ImgCreateManyInputSchema,ImgCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ImgDeleteArgsSchema: z.ZodType<Prisma.ImgDeleteArgs> = z.object({
  select: ImgSelectSchema.optional(),
  include: ImgIncludeSchema.optional(),
  where: ImgWhereUniqueInputSchema,
}).strict()

export const ImgUpdateArgsSchema: z.ZodType<Prisma.ImgUpdateArgs> = z.object({
  select: ImgSelectSchema.optional(),
  include: ImgIncludeSchema.optional(),
  data: z.union([ ImgUpdateInputSchema,ImgUncheckedUpdateInputSchema ]),
  where: ImgWhereUniqueInputSchema,
}).strict()

export const ImgUpdateManyArgsSchema: z.ZodType<Prisma.ImgUpdateManyArgs> = z.object({
  data: z.union([ ImgUpdateManyMutationInputSchema,ImgUncheckedUpdateManyInputSchema ]),
  where: ImgWhereInputSchema.optional(),
}).strict()

export const ImgDeleteManyArgsSchema: z.ZodType<Prisma.ImgDeleteManyArgs> = z.object({
  where: ImgWhereInputSchema.optional(),
}).strict()

export const ElevationCreateArgsSchema: z.ZodType<Prisma.ElevationCreateArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  data: z.union([ ElevationCreateInputSchema,ElevationUncheckedCreateInputSchema ]),
}).strict()

export const ElevationUpsertArgsSchema: z.ZodType<Prisma.ElevationUpsertArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereUniqueInputSchema,
  create: z.union([ ElevationCreateInputSchema,ElevationUncheckedCreateInputSchema ]),
  update: z.union([ ElevationUpdateInputSchema,ElevationUncheckedUpdateInputSchema ]),
}).strict()

export const ElevationCreateManyArgsSchema: z.ZodType<Prisma.ElevationCreateManyArgs> = z.object({
  data: z.union([ ElevationCreateManyInputSchema,ElevationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ElevationDeleteArgsSchema: z.ZodType<Prisma.ElevationDeleteArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  where: ElevationWhereUniqueInputSchema,
}).strict()

export const ElevationUpdateArgsSchema: z.ZodType<Prisma.ElevationUpdateArgs> = z.object({
  select: ElevationSelectSchema.optional(),
  include: ElevationIncludeSchema.optional(),
  data: z.union([ ElevationUpdateInputSchema,ElevationUncheckedUpdateInputSchema ]),
  where: ElevationWhereUniqueInputSchema,
}).strict()

export const ElevationUpdateManyArgsSchema: z.ZodType<Prisma.ElevationUpdateManyArgs> = z.object({
  data: z.union([ ElevationUpdateManyMutationInputSchema,ElevationUncheckedUpdateManyInputSchema ]),
  where: ElevationWhereInputSchema.optional(),
}).strict()

export const ElevationDeleteManyArgsSchema: z.ZodType<Prisma.ElevationDeleteManyArgs> = z.object({
  where: ElevationWhereInputSchema.optional(),
}).strict()