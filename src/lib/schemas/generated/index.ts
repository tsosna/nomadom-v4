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

export const MainmenuScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','slug','name','path','icon']);

export const MenuitemScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','slug','name','path','icon','mainmenuId']);

export const UserScalarFieldEnumSchema = z.enum(['id','fullName','userName']);

export const SessionScalarFieldEnumSchema = z.enum(['id','user_id','active_expires','idle_expires']);

export const KeyScalarFieldEnumSchema = z.enum(['id','hashed_password','user_id']);

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
// MAINMENU SCHEMA
/////////////////////////////////////////

export const MainmenuSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().nullable(),
})

export type Mainmenu = z.infer<typeof MainmenuSchema>

/////////////////////////////////////////
// MENUITEM SCHEMA
/////////////////////////////////////////

export const MenuitemSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().nullable(),
  mainmenuId: z.number().int(),
})

export type Menuitem = z.infer<typeof MenuitemSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  fullName: z.string().nullable(),
  userName: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// KEY SCHEMA
/////////////////////////////////////////

export const KeySchema = z.object({
  id: z.string(),
  hashed_password: z.string().nullable(),
  user_id: z.string(),
})

export type Key = z.infer<typeof KeySchema>

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

// MAINMENU
//------------------------------------------------------

export const MainmenuIncludeSchema: z.ZodType<Prisma.MainmenuInclude> = z.object({
  sumbmenu: z.union([z.boolean(),z.lazy(() => MenuitemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MainmenuCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MainmenuArgsSchema: z.ZodType<Prisma.MainmenuDefaultArgs> = z.object({
  select: z.lazy(() => MainmenuSelectSchema).optional(),
  include: z.lazy(() => MainmenuIncludeSchema).optional(),
}).strict();

export const MainmenuCountOutputTypeArgsSchema: z.ZodType<Prisma.MainmenuCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MainmenuCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MainmenuCountOutputTypeSelectSchema: z.ZodType<Prisma.MainmenuCountOutputTypeSelect> = z.object({
  sumbmenu: z.boolean().optional(),
}).strict();

export const MainmenuSelectSchema: z.ZodType<Prisma.MainmenuSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  slug: z.boolean().optional(),
  name: z.boolean().optional(),
  path: z.boolean().optional(),
  icon: z.boolean().optional(),
  sumbmenu: z.union([z.boolean(),z.lazy(() => MenuitemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MainmenuCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MENUITEM
//------------------------------------------------------

export const MenuitemIncludeSchema: z.ZodType<Prisma.MenuitemInclude> = z.object({
  mainmenu: z.union([z.boolean(),z.lazy(() => MainmenuArgsSchema)]).optional(),
}).strict()

export const MenuitemArgsSchema: z.ZodType<Prisma.MenuitemDefaultArgs> = z.object({
  select: z.lazy(() => MenuitemSelectSchema).optional(),
  include: z.lazy(() => MenuitemIncludeSchema).optional(),
}).strict();

export const MenuitemSelectSchema: z.ZodType<Prisma.MenuitemSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  slug: z.boolean().optional(),
  name: z.boolean().optional(),
  path: z.boolean().optional(),
  icon: z.boolean().optional(),
  mainmenuId: z.boolean().optional(),
  mainmenu: z.union([z.boolean(),z.lazy(() => MainmenuArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  auth_session: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  key: z.union([z.boolean(),z.lazy(() => KeyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  auth_session: z.boolean().optional(),
  key: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  fullName: z.boolean().optional(),
  userName: z.boolean().optional(),
  auth_session: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  key: z.union([z.boolean(),z.lazy(() => KeyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  active_expires: z.boolean().optional(),
  idle_expires: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// KEY
//------------------------------------------------------

export const KeyIncludeSchema: z.ZodType<Prisma.KeyInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const KeyArgsSchema: z.ZodType<Prisma.KeyDefaultArgs> = z.object({
  select: z.lazy(() => KeySelectSchema).optional(),
  include: z.lazy(() => KeyIncludeSchema).optional(),
}).strict();

export const KeySelectSchema: z.ZodType<Prisma.KeySelect> = z.object({
  id: z.boolean().optional(),
  hashed_password: z.boolean().optional(),
  user_id: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
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

export const MainmenuWhereInputSchema: z.ZodType<Prisma.MainmenuWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MainmenuWhereInputSchema),z.lazy(() => MainmenuWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MainmenuWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MainmenuWhereInputSchema),z.lazy(() => MainmenuWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sumbmenu: z.lazy(() => MenuitemListRelationFilterSchema).optional()
}).strict();

export const MainmenuOrderByWithRelationInputSchema: z.ZodType<Prisma.MainmenuOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sumbmenu: z.lazy(() => MenuitemOrderByRelationAggregateInputSchema).optional()
}).strict();

export const MainmenuWhereUniqueInputSchema: z.ZodType<Prisma.MainmenuWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    slug: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => MainmenuWhereInputSchema),z.lazy(() => MainmenuWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MainmenuWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MainmenuWhereInputSchema),z.lazy(() => MainmenuWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sumbmenu: z.lazy(() => MenuitemListRelationFilterSchema).optional()
}).strict());

export const MainmenuOrderByWithAggregationInputSchema: z.ZodType<Prisma.MainmenuOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => MainmenuCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MainmenuAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MainmenuMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MainmenuMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MainmenuSumOrderByAggregateInputSchema).optional()
}).strict();

export const MainmenuScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MainmenuScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MainmenuScalarWhereWithAggregatesInputSchema),z.lazy(() => MainmenuScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MainmenuScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MainmenuScalarWhereWithAggregatesInputSchema),z.lazy(() => MainmenuScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  path: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const MenuitemWhereInputSchema: z.ZodType<Prisma.MenuitemWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MenuitemWhereInputSchema),z.lazy(() => MenuitemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenuitemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenuitemWhereInputSchema),z.lazy(() => MenuitemWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mainmenuId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mainmenu: z.union([ z.lazy(() => MainmenuRelationFilterSchema),z.lazy(() => MainmenuWhereInputSchema) ]).optional(),
}).strict();

export const MenuitemOrderByWithRelationInputSchema: z.ZodType<Prisma.MenuitemOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mainmenuId: z.lazy(() => SortOrderSchema).optional(),
  mainmenu: z.lazy(() => MainmenuOrderByWithRelationInputSchema).optional()
}).strict();

export const MenuitemWhereUniqueInputSchema: z.ZodType<Prisma.MenuitemWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    slug: z.string(),
    mainmenuId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
    slug: z.string(),
  }),
  z.object({
    id: z.number().int(),
    mainmenuId: z.number().int(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    slug: z.string(),
    mainmenuId: z.number().int(),
  }),
  z.object({
    slug: z.string(),
  }),
  z.object({
    mainmenuId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  slug: z.string().optional(),
  mainmenuId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => MenuitemWhereInputSchema),z.lazy(() => MenuitemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenuitemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenuitemWhereInputSchema),z.lazy(() => MenuitemWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mainmenu: z.union([ z.lazy(() => MainmenuRelationFilterSchema),z.lazy(() => MainmenuWhereInputSchema) ]).optional(),
}).strict());

export const MenuitemOrderByWithAggregationInputSchema: z.ZodType<Prisma.MenuitemOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mainmenuId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MenuitemCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MenuitemAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MenuitemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MenuitemMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MenuitemSumOrderByAggregateInputSchema).optional()
}).strict();

export const MenuitemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MenuitemScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MenuitemScalarWhereWithAggregatesInputSchema),z.lazy(() => MenuitemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenuitemScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenuitemScalarWhereWithAggregatesInputSchema),z.lazy(() => MenuitemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  path: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  mainmenuId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fullName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  auth_session: z.lazy(() => SessionListRelationFilterSchema).optional(),
  key: z.lazy(() => KeyListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userName: z.lazy(() => SortOrderSchema).optional(),
  auth_session: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  key: z.lazy(() => KeyOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userName: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userName: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userName: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  fullName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  auth_session: z.lazy(() => SessionListRelationFilterSchema).optional(),
  key: z.lazy(() => KeyListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userName: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  fullName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  userName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  active_expires: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  idle_expires: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  active_expires: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  idle_expires: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SessionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SessionSumOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  active_expires: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  idle_expires: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
}).strict();

export const KeyWhereInputSchema: z.ZodType<Prisma.KeyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => KeyWhereInputSchema),z.lazy(() => KeyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KeyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KeyWhereInputSchema),z.lazy(() => KeyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hashed_password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const KeyOrderByWithRelationInputSchema: z.ZodType<Prisma.KeyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hashed_password: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const KeyWhereUniqueInputSchema: z.ZodType<Prisma.KeyWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => KeyWhereInputSchema),z.lazy(() => KeyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KeyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KeyWhereInputSchema),z.lazy(() => KeyWhereInputSchema).array() ]).optional(),
  hashed_password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const KeyOrderByWithAggregationInputSchema: z.ZodType<Prisma.KeyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hashed_password: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => KeyCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => KeyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => KeyMinOrderByAggregateInputSchema).optional()
}).strict();

export const KeyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.KeyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => KeyScalarWhereWithAggregatesInputSchema),z.lazy(() => KeyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => KeyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KeyScalarWhereWithAggregatesInputSchema),z.lazy(() => KeyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hashed_password: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
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

export const MainmenuCreateInputSchema: z.ZodType<Prisma.MainmenuCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable(),
  sumbmenu: z.lazy(() => MenuitemCreateNestedManyWithoutMainmenuInputSchema).optional()
}).strict();

export const MainmenuUncheckedCreateInputSchema: z.ZodType<Prisma.MainmenuUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable(),
  sumbmenu: z.lazy(() => MenuitemUncheckedCreateNestedManyWithoutMainmenuInputSchema).optional()
}).strict();

export const MainmenuUpdateInputSchema: z.ZodType<Prisma.MainmenuUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sumbmenu: z.lazy(() => MenuitemUpdateManyWithoutMainmenuNestedInputSchema).optional()
}).strict();

export const MainmenuUncheckedUpdateInputSchema: z.ZodType<Prisma.MainmenuUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sumbmenu: z.lazy(() => MenuitemUncheckedUpdateManyWithoutMainmenuNestedInputSchema).optional()
}).strict();

export const MainmenuCreateManyInputSchema: z.ZodType<Prisma.MainmenuCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable()
}).strict();

export const MainmenuUpdateManyMutationInputSchema: z.ZodType<Prisma.MainmenuUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MainmenuUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MainmenuUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MenuitemCreateInputSchema: z.ZodType<Prisma.MenuitemCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable(),
  mainmenu: z.lazy(() => MainmenuCreateNestedOneWithoutSumbmenuInputSchema)
}).strict();

export const MenuitemUncheckedCreateInputSchema: z.ZodType<Prisma.MenuitemUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable(),
  mainmenuId: z.number().int()
}).strict();

export const MenuitemUpdateInputSchema: z.ZodType<Prisma.MenuitemUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainmenu: z.lazy(() => MainmenuUpdateOneRequiredWithoutSumbmenuNestedInputSchema).optional()
}).strict();

export const MenuitemUncheckedUpdateInputSchema: z.ZodType<Prisma.MenuitemUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainmenuId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MenuitemCreateManyInputSchema: z.ZodType<Prisma.MenuitemCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable(),
  mainmenuId: z.number().int()
}).strict();

export const MenuitemUpdateManyMutationInputSchema: z.ZodType<Prisma.MenuitemUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MenuitemUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MenuitemUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mainmenuId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string(),
  fullName: z.string().optional().nullable(),
  userName: z.string(),
  auth_session: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  key: z.lazy(() => KeyCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string(),
  fullName: z.string().optional().nullable(),
  userName: z.string(),
  auth_session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  key: z.lazy(() => KeyUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  key: z.lazy(() => KeyUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  key: z.lazy(() => KeyUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string(),
  fullName: z.string().optional().nullable(),
  userName: z.string()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint(),
  user: z.lazy(() => UserCreateNestedOneWithoutAuth_sessionInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string(),
  user_id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAuth_sessionNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string(),
  user_id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const KeyCreateInputSchema: z.ZodType<Prisma.KeyCreateInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutKeyInputSchema)
}).strict();

export const KeyUncheckedCreateInputSchema: z.ZodType<Prisma.KeyUncheckedCreateInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable(),
  user_id: z.string()
}).strict();

export const KeyUpdateInputSchema: z.ZodType<Prisma.KeyUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutKeyNestedInputSchema).optional()
}).strict();

export const KeyUncheckedUpdateInputSchema: z.ZodType<Prisma.KeyUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const KeyCreateManyInputSchema: z.ZodType<Prisma.KeyCreateManyInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable(),
  user_id: z.string()
}).strict();

export const KeyUpdateManyMutationInputSchema: z.ZodType<Prisma.KeyUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const KeyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.KeyUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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

export const MenuitemListRelationFilterSchema: z.ZodType<Prisma.MenuitemListRelationFilter> = z.object({
  every: z.lazy(() => MenuitemWhereInputSchema).optional(),
  some: z.lazy(() => MenuitemWhereInputSchema).optional(),
  none: z.lazy(() => MenuitemWhereInputSchema).optional()
}).strict();

export const MenuitemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MenuitemOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MainmenuCountOrderByAggregateInputSchema: z.ZodType<Prisma.MainmenuCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MainmenuAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MainmenuAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MainmenuMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MainmenuMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MainmenuMinOrderByAggregateInputSchema: z.ZodType<Prisma.MainmenuMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MainmenuSumOrderByAggregateInputSchema: z.ZodType<Prisma.MainmenuSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MainmenuRelationFilterSchema: z.ZodType<Prisma.MainmenuRelationFilter> = z.object({
  is: z.lazy(() => MainmenuWhereInputSchema).optional(),
  isNot: z.lazy(() => MainmenuWhereInputSchema).optional()
}).strict();

export const MenuitemCountOrderByAggregateInputSchema: z.ZodType<Prisma.MenuitemCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  mainmenuId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenuitemAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MenuitemAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mainmenuId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenuitemMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MenuitemMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  mainmenuId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenuitemMinOrderByAggregateInputSchema: z.ZodType<Prisma.MenuitemMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  mainmenuId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenuitemSumOrderByAggregateInputSchema: z.ZodType<Prisma.MenuitemSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mainmenuId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const KeyListRelationFilterSchema: z.ZodType<Prisma.KeyListRelationFilter> = z.object({
  every: z.lazy(() => KeyWhereInputSchema).optional(),
  some: z.lazy(() => KeyWhereInputSchema).optional(),
  none: z.lazy(() => KeyWhereInputSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const KeyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.KeyOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.lazy(() => SortOrderSchema).optional(),
  userName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.lazy(() => SortOrderSchema).optional(),
  userName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.lazy(() => SortOrderSchema).optional(),
  userName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SessionAvgOrderByAggregateInput> = z.object({
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionSumOrderByAggregateInputSchema: z.ZodType<Prisma.SessionSumOrderByAggregateInput> = z.object({
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const KeyCountOrderByAggregateInputSchema: z.ZodType<Prisma.KeyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hashed_password: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const KeyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.KeyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hashed_password: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const KeyMinOrderByAggregateInputSchema: z.ZodType<Prisma.KeyMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hashed_password: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional()
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

export const MenuitemCreateNestedManyWithoutMainmenuInputSchema: z.ZodType<Prisma.MenuitemCreateNestedManyWithoutMainmenuInput> = z.object({
  create: z.union([ z.lazy(() => MenuitemCreateWithoutMainmenuInputSchema),z.lazy(() => MenuitemCreateWithoutMainmenuInputSchema).array(),z.lazy(() => MenuitemUncheckedCreateWithoutMainmenuInputSchema),z.lazy(() => MenuitemUncheckedCreateWithoutMainmenuInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenuitemCreateOrConnectWithoutMainmenuInputSchema),z.lazy(() => MenuitemCreateOrConnectWithoutMainmenuInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MenuitemCreateManyMainmenuInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MenuitemWhereUniqueInputSchema),z.lazy(() => MenuitemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MenuitemUncheckedCreateNestedManyWithoutMainmenuInputSchema: z.ZodType<Prisma.MenuitemUncheckedCreateNestedManyWithoutMainmenuInput> = z.object({
  create: z.union([ z.lazy(() => MenuitemCreateWithoutMainmenuInputSchema),z.lazy(() => MenuitemCreateWithoutMainmenuInputSchema).array(),z.lazy(() => MenuitemUncheckedCreateWithoutMainmenuInputSchema),z.lazy(() => MenuitemUncheckedCreateWithoutMainmenuInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenuitemCreateOrConnectWithoutMainmenuInputSchema),z.lazy(() => MenuitemCreateOrConnectWithoutMainmenuInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MenuitemCreateManyMainmenuInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MenuitemWhereUniqueInputSchema),z.lazy(() => MenuitemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MenuitemUpdateManyWithoutMainmenuNestedInputSchema: z.ZodType<Prisma.MenuitemUpdateManyWithoutMainmenuNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenuitemCreateWithoutMainmenuInputSchema),z.lazy(() => MenuitemCreateWithoutMainmenuInputSchema).array(),z.lazy(() => MenuitemUncheckedCreateWithoutMainmenuInputSchema),z.lazy(() => MenuitemUncheckedCreateWithoutMainmenuInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenuitemCreateOrConnectWithoutMainmenuInputSchema),z.lazy(() => MenuitemCreateOrConnectWithoutMainmenuInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MenuitemUpsertWithWhereUniqueWithoutMainmenuInputSchema),z.lazy(() => MenuitemUpsertWithWhereUniqueWithoutMainmenuInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MenuitemCreateManyMainmenuInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MenuitemWhereUniqueInputSchema),z.lazy(() => MenuitemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MenuitemWhereUniqueInputSchema),z.lazy(() => MenuitemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MenuitemWhereUniqueInputSchema),z.lazy(() => MenuitemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MenuitemWhereUniqueInputSchema),z.lazy(() => MenuitemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MenuitemUpdateWithWhereUniqueWithoutMainmenuInputSchema),z.lazy(() => MenuitemUpdateWithWhereUniqueWithoutMainmenuInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MenuitemUpdateManyWithWhereWithoutMainmenuInputSchema),z.lazy(() => MenuitemUpdateManyWithWhereWithoutMainmenuInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MenuitemScalarWhereInputSchema),z.lazy(() => MenuitemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MenuitemUncheckedUpdateManyWithoutMainmenuNestedInputSchema: z.ZodType<Prisma.MenuitemUncheckedUpdateManyWithoutMainmenuNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenuitemCreateWithoutMainmenuInputSchema),z.lazy(() => MenuitemCreateWithoutMainmenuInputSchema).array(),z.lazy(() => MenuitemUncheckedCreateWithoutMainmenuInputSchema),z.lazy(() => MenuitemUncheckedCreateWithoutMainmenuInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenuitemCreateOrConnectWithoutMainmenuInputSchema),z.lazy(() => MenuitemCreateOrConnectWithoutMainmenuInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MenuitemUpsertWithWhereUniqueWithoutMainmenuInputSchema),z.lazy(() => MenuitemUpsertWithWhereUniqueWithoutMainmenuInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MenuitemCreateManyMainmenuInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MenuitemWhereUniqueInputSchema),z.lazy(() => MenuitemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MenuitemWhereUniqueInputSchema),z.lazy(() => MenuitemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MenuitemWhereUniqueInputSchema),z.lazy(() => MenuitemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MenuitemWhereUniqueInputSchema),z.lazy(() => MenuitemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MenuitemUpdateWithWhereUniqueWithoutMainmenuInputSchema),z.lazy(() => MenuitemUpdateWithWhereUniqueWithoutMainmenuInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MenuitemUpdateManyWithWhereWithoutMainmenuInputSchema),z.lazy(() => MenuitemUpdateManyWithWhereWithoutMainmenuInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MenuitemScalarWhereInputSchema),z.lazy(() => MenuitemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MainmenuCreateNestedOneWithoutSumbmenuInputSchema: z.ZodType<Prisma.MainmenuCreateNestedOneWithoutSumbmenuInput> = z.object({
  create: z.union([ z.lazy(() => MainmenuCreateWithoutSumbmenuInputSchema),z.lazy(() => MainmenuUncheckedCreateWithoutSumbmenuInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MainmenuCreateOrConnectWithoutSumbmenuInputSchema).optional(),
  connect: z.lazy(() => MainmenuWhereUniqueInputSchema).optional()
}).strict();

export const MainmenuUpdateOneRequiredWithoutSumbmenuNestedInputSchema: z.ZodType<Prisma.MainmenuUpdateOneRequiredWithoutSumbmenuNestedInput> = z.object({
  create: z.union([ z.lazy(() => MainmenuCreateWithoutSumbmenuInputSchema),z.lazy(() => MainmenuUncheckedCreateWithoutSumbmenuInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MainmenuCreateOrConnectWithoutSumbmenuInputSchema).optional(),
  upsert: z.lazy(() => MainmenuUpsertWithoutSumbmenuInputSchema).optional(),
  connect: z.lazy(() => MainmenuWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MainmenuUpdateToOneWithWhereWithoutSumbmenuInputSchema),z.lazy(() => MainmenuUpdateWithoutSumbmenuInputSchema),z.lazy(() => MainmenuUncheckedUpdateWithoutSumbmenuInputSchema) ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const KeyCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.KeyCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => KeyCreateWithoutUserInputSchema),z.lazy(() => KeyCreateWithoutUserInputSchema).array(),z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema),z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema),z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => KeyCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => KeyWhereUniqueInputSchema),z.lazy(() => KeyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const KeyUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.KeyUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => KeyCreateWithoutUserInputSchema),z.lazy(() => KeyCreateWithoutUserInputSchema).array(),z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema),z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema),z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => KeyCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => KeyWhereUniqueInputSchema),z.lazy(() => KeyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const KeyUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.KeyUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => KeyCreateWithoutUserInputSchema),z.lazy(() => KeyCreateWithoutUserInputSchema).array(),z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema),z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema),z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => KeyUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => KeyUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => KeyCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => KeyWhereUniqueInputSchema),z.lazy(() => KeyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => KeyWhereUniqueInputSchema),z.lazy(() => KeyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => KeyWhereUniqueInputSchema),z.lazy(() => KeyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => KeyWhereUniqueInputSchema),z.lazy(() => KeyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => KeyUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => KeyUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => KeyUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => KeyUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => KeyScalarWhereInputSchema),z.lazy(() => KeyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const KeyUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.KeyUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => KeyCreateWithoutUserInputSchema),z.lazy(() => KeyCreateWithoutUserInputSchema).array(),z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema),z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema),z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => KeyUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => KeyUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => KeyCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => KeyWhereUniqueInputSchema),z.lazy(() => KeyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => KeyWhereUniqueInputSchema),z.lazy(() => KeyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => KeyWhereUniqueInputSchema),z.lazy(() => KeyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => KeyWhereUniqueInputSchema),z.lazy(() => KeyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => KeyUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => KeyUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => KeyUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => KeyUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => KeyScalarWhereInputSchema),z.lazy(() => KeyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAuth_sessionInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAuth_sessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuth_sessionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuth_sessionInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAuth_sessionNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAuth_sessionNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAuth_sessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuth_sessionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuth_sessionInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAuth_sessionInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAuth_sessionInputSchema),z.lazy(() => UserUpdateWithoutAuth_sessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuth_sessionInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutKeyInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutKeyInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutKeyInputSchema),z.lazy(() => UserUncheckedCreateWithoutKeyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutKeyInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutKeyNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutKeyNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutKeyInputSchema),z.lazy(() => UserUncheckedCreateWithoutKeyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutKeyInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutKeyInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutKeyInputSchema),z.lazy(() => UserUpdateWithoutKeyInputSchema),z.lazy(() => UserUncheckedUpdateWithoutKeyInputSchema) ]).optional(),
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

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
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

export const MenuitemCreateWithoutMainmenuInputSchema: z.ZodType<Prisma.MenuitemCreateWithoutMainmenuInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable()
}).strict();

export const MenuitemUncheckedCreateWithoutMainmenuInputSchema: z.ZodType<Prisma.MenuitemUncheckedCreateWithoutMainmenuInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable()
}).strict();

export const MenuitemCreateOrConnectWithoutMainmenuInputSchema: z.ZodType<Prisma.MenuitemCreateOrConnectWithoutMainmenuInput> = z.object({
  where: z.lazy(() => MenuitemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenuitemCreateWithoutMainmenuInputSchema),z.lazy(() => MenuitemUncheckedCreateWithoutMainmenuInputSchema) ]),
}).strict();

export const MenuitemCreateManyMainmenuInputEnvelopeSchema: z.ZodType<Prisma.MenuitemCreateManyMainmenuInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MenuitemCreateManyMainmenuInputSchema),z.lazy(() => MenuitemCreateManyMainmenuInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MenuitemUpsertWithWhereUniqueWithoutMainmenuInputSchema: z.ZodType<Prisma.MenuitemUpsertWithWhereUniqueWithoutMainmenuInput> = z.object({
  where: z.lazy(() => MenuitemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MenuitemUpdateWithoutMainmenuInputSchema),z.lazy(() => MenuitemUncheckedUpdateWithoutMainmenuInputSchema) ]),
  create: z.union([ z.lazy(() => MenuitemCreateWithoutMainmenuInputSchema),z.lazy(() => MenuitemUncheckedCreateWithoutMainmenuInputSchema) ]),
}).strict();

export const MenuitemUpdateWithWhereUniqueWithoutMainmenuInputSchema: z.ZodType<Prisma.MenuitemUpdateWithWhereUniqueWithoutMainmenuInput> = z.object({
  where: z.lazy(() => MenuitemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MenuitemUpdateWithoutMainmenuInputSchema),z.lazy(() => MenuitemUncheckedUpdateWithoutMainmenuInputSchema) ]),
}).strict();

export const MenuitemUpdateManyWithWhereWithoutMainmenuInputSchema: z.ZodType<Prisma.MenuitemUpdateManyWithWhereWithoutMainmenuInput> = z.object({
  where: z.lazy(() => MenuitemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MenuitemUpdateManyMutationInputSchema),z.lazy(() => MenuitemUncheckedUpdateManyWithoutMainmenuInputSchema) ]),
}).strict();

export const MenuitemScalarWhereInputSchema: z.ZodType<Prisma.MenuitemScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MenuitemScalarWhereInputSchema),z.lazy(() => MenuitemScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenuitemScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenuitemScalarWhereInputSchema),z.lazy(() => MenuitemScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mainmenuId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const MainmenuCreateWithoutSumbmenuInputSchema: z.ZodType<Prisma.MainmenuCreateWithoutSumbmenuInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable()
}).strict();

export const MainmenuUncheckedCreateWithoutSumbmenuInputSchema: z.ZodType<Prisma.MainmenuUncheckedCreateWithoutSumbmenuInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable()
}).strict();

export const MainmenuCreateOrConnectWithoutSumbmenuInputSchema: z.ZodType<Prisma.MainmenuCreateOrConnectWithoutSumbmenuInput> = z.object({
  where: z.lazy(() => MainmenuWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MainmenuCreateWithoutSumbmenuInputSchema),z.lazy(() => MainmenuUncheckedCreateWithoutSumbmenuInputSchema) ]),
}).strict();

export const MainmenuUpsertWithoutSumbmenuInputSchema: z.ZodType<Prisma.MainmenuUpsertWithoutSumbmenuInput> = z.object({
  update: z.union([ z.lazy(() => MainmenuUpdateWithoutSumbmenuInputSchema),z.lazy(() => MainmenuUncheckedUpdateWithoutSumbmenuInputSchema) ]),
  create: z.union([ z.lazy(() => MainmenuCreateWithoutSumbmenuInputSchema),z.lazy(() => MainmenuUncheckedCreateWithoutSumbmenuInputSchema) ]),
  where: z.lazy(() => MainmenuWhereInputSchema).optional()
}).strict();

export const MainmenuUpdateToOneWithWhereWithoutSumbmenuInputSchema: z.ZodType<Prisma.MainmenuUpdateToOneWithWhereWithoutSumbmenuInput> = z.object({
  where: z.lazy(() => MainmenuWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MainmenuUpdateWithoutSumbmenuInputSchema),z.lazy(() => MainmenuUncheckedUpdateWithoutSumbmenuInputSchema) ]),
}).strict();

export const MainmenuUpdateWithoutSumbmenuInputSchema: z.ZodType<Prisma.MainmenuUpdateWithoutSumbmenuInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MainmenuUncheckedUpdateWithoutSumbmenuInputSchema: z.ZodType<Prisma.MainmenuUncheckedUpdateWithoutSumbmenuInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const KeyCreateWithoutUserInputSchema: z.ZodType<Prisma.KeyCreateWithoutUserInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable()
}).strict();

export const KeyUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.KeyUncheckedCreateWithoutUserInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable()
}).strict();

export const KeyCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.KeyCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => KeyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KeyCreateWithoutUserInputSchema),z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const KeyCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.KeyCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => KeyCreateManyUserInputSchema),z.lazy(() => KeyCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  active_expires: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  idle_expires: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
}).strict();

export const KeyUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.KeyUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => KeyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => KeyUpdateWithoutUserInputSchema),z.lazy(() => KeyUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => KeyCreateWithoutUserInputSchema),z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const KeyUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.KeyUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => KeyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => KeyUpdateWithoutUserInputSchema),z.lazy(() => KeyUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const KeyUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.KeyUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => KeyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => KeyUpdateManyMutationInputSchema),z.lazy(() => KeyUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const KeyScalarWhereInputSchema: z.ZodType<Prisma.KeyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => KeyScalarWhereInputSchema),z.lazy(() => KeyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KeyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KeyScalarWhereInputSchema),z.lazy(() => KeyScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hashed_password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserCreateWithoutAuth_sessionInput> = z.object({
  id: z.string(),
  fullName: z.string().optional().nullable(),
  userName: z.string(),
  key: z.lazy(() => KeyCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAuth_sessionInput> = z.object({
  id: z.string(),
  fullName: z.string().optional().nullable(),
  userName: z.string(),
  key: z.lazy(() => KeyUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAuth_sessionInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAuth_sessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuth_sessionInputSchema) ]),
}).strict();

export const UserUpsertWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserUpsertWithoutAuth_sessionInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAuth_sessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuth_sessionInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAuth_sessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuth_sessionInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAuth_sessionInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAuth_sessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuth_sessionInputSchema) ]),
}).strict();

export const UserUpdateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserUpdateWithoutAuth_sessionInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.lazy(() => KeyUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAuth_sessionInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.lazy(() => KeyUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutKeyInputSchema: z.ZodType<Prisma.UserCreateWithoutKeyInput> = z.object({
  id: z.string(),
  fullName: z.string().optional().nullable(),
  userName: z.string(),
  auth_session: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutKeyInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutKeyInput> = z.object({
  id: z.string(),
  fullName: z.string().optional().nullable(),
  userName: z.string(),
  auth_session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutKeyInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutKeyInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutKeyInputSchema),z.lazy(() => UserUncheckedCreateWithoutKeyInputSchema) ]),
}).strict();

export const UserUpsertWithoutKeyInputSchema: z.ZodType<Prisma.UserUpsertWithoutKeyInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutKeyInputSchema),z.lazy(() => UserUncheckedUpdateWithoutKeyInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutKeyInputSchema),z.lazy(() => UserUncheckedCreateWithoutKeyInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutKeyInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutKeyInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutKeyInputSchema),z.lazy(() => UserUncheckedUpdateWithoutKeyInputSchema) ]),
}).strict();

export const UserUpdateWithoutKeyInputSchema: z.ZodType<Prisma.UserUpdateWithoutKeyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutKeyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutKeyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const MenuitemCreateManyMainmenuInputSchema: z.ZodType<Prisma.MenuitemCreateManyMainmenuInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slug: z.string(),
  name: z.string(),
  path: z.string(),
  icon: z.string().optional().nullable()
}).strict();

export const MenuitemUpdateWithoutMainmenuInputSchema: z.ZodType<Prisma.MenuitemUpdateWithoutMainmenuInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MenuitemUncheckedUpdateWithoutMainmenuInputSchema: z.ZodType<Prisma.MenuitemUncheckedUpdateWithoutMainmenuInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MenuitemUncheckedUpdateManyWithoutMainmenuInputSchema: z.ZodType<Prisma.MenuitemUncheckedUpdateManyWithoutMainmenuInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export const KeyCreateManyUserInputSchema: z.ZodType<Prisma.KeyCreateManyUserInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable()
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const KeyUpdateWithoutUserInputSchema: z.ZodType<Prisma.KeyUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const KeyUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.KeyUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const KeyUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.KeyUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

export const MainmenuFindFirstArgsSchema: z.ZodType<Prisma.MainmenuFindFirstArgs> = z.object({
  select: MainmenuSelectSchema.optional(),
  include: MainmenuIncludeSchema.optional(),
  where: MainmenuWhereInputSchema.optional(),
  orderBy: z.union([ MainmenuOrderByWithRelationInputSchema.array(),MainmenuOrderByWithRelationInputSchema ]).optional(),
  cursor: MainmenuWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MainmenuScalarFieldEnumSchema,MainmenuScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MainmenuFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MainmenuFindFirstOrThrowArgs> = z.object({
  select: MainmenuSelectSchema.optional(),
  include: MainmenuIncludeSchema.optional(),
  where: MainmenuWhereInputSchema.optional(),
  orderBy: z.union([ MainmenuOrderByWithRelationInputSchema.array(),MainmenuOrderByWithRelationInputSchema ]).optional(),
  cursor: MainmenuWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MainmenuScalarFieldEnumSchema,MainmenuScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MainmenuFindManyArgsSchema: z.ZodType<Prisma.MainmenuFindManyArgs> = z.object({
  select: MainmenuSelectSchema.optional(),
  include: MainmenuIncludeSchema.optional(),
  where: MainmenuWhereInputSchema.optional(),
  orderBy: z.union([ MainmenuOrderByWithRelationInputSchema.array(),MainmenuOrderByWithRelationInputSchema ]).optional(),
  cursor: MainmenuWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MainmenuScalarFieldEnumSchema,MainmenuScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MainmenuAggregateArgsSchema: z.ZodType<Prisma.MainmenuAggregateArgs> = z.object({
  where: MainmenuWhereInputSchema.optional(),
  orderBy: z.union([ MainmenuOrderByWithRelationInputSchema.array(),MainmenuOrderByWithRelationInputSchema ]).optional(),
  cursor: MainmenuWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MainmenuGroupByArgsSchema: z.ZodType<Prisma.MainmenuGroupByArgs> = z.object({
  where: MainmenuWhereInputSchema.optional(),
  orderBy: z.union([ MainmenuOrderByWithAggregationInputSchema.array(),MainmenuOrderByWithAggregationInputSchema ]).optional(),
  by: MainmenuScalarFieldEnumSchema.array(),
  having: MainmenuScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MainmenuFindUniqueArgsSchema: z.ZodType<Prisma.MainmenuFindUniqueArgs> = z.object({
  select: MainmenuSelectSchema.optional(),
  include: MainmenuIncludeSchema.optional(),
  where: MainmenuWhereUniqueInputSchema,
}).strict()

export const MainmenuFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MainmenuFindUniqueOrThrowArgs> = z.object({
  select: MainmenuSelectSchema.optional(),
  include: MainmenuIncludeSchema.optional(),
  where: MainmenuWhereUniqueInputSchema,
}).strict()

export const MenuitemFindFirstArgsSchema: z.ZodType<Prisma.MenuitemFindFirstArgs> = z.object({
  select: MenuitemSelectSchema.optional(),
  include: MenuitemIncludeSchema.optional(),
  where: MenuitemWhereInputSchema.optional(),
  orderBy: z.union([ MenuitemOrderByWithRelationInputSchema.array(),MenuitemOrderByWithRelationInputSchema ]).optional(),
  cursor: MenuitemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MenuitemScalarFieldEnumSchema,MenuitemScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MenuitemFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MenuitemFindFirstOrThrowArgs> = z.object({
  select: MenuitemSelectSchema.optional(),
  include: MenuitemIncludeSchema.optional(),
  where: MenuitemWhereInputSchema.optional(),
  orderBy: z.union([ MenuitemOrderByWithRelationInputSchema.array(),MenuitemOrderByWithRelationInputSchema ]).optional(),
  cursor: MenuitemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MenuitemScalarFieldEnumSchema,MenuitemScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MenuitemFindManyArgsSchema: z.ZodType<Prisma.MenuitemFindManyArgs> = z.object({
  select: MenuitemSelectSchema.optional(),
  include: MenuitemIncludeSchema.optional(),
  where: MenuitemWhereInputSchema.optional(),
  orderBy: z.union([ MenuitemOrderByWithRelationInputSchema.array(),MenuitemOrderByWithRelationInputSchema ]).optional(),
  cursor: MenuitemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MenuitemScalarFieldEnumSchema,MenuitemScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MenuitemAggregateArgsSchema: z.ZodType<Prisma.MenuitemAggregateArgs> = z.object({
  where: MenuitemWhereInputSchema.optional(),
  orderBy: z.union([ MenuitemOrderByWithRelationInputSchema.array(),MenuitemOrderByWithRelationInputSchema ]).optional(),
  cursor: MenuitemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MenuitemGroupByArgsSchema: z.ZodType<Prisma.MenuitemGroupByArgs> = z.object({
  where: MenuitemWhereInputSchema.optional(),
  orderBy: z.union([ MenuitemOrderByWithAggregationInputSchema.array(),MenuitemOrderByWithAggregationInputSchema ]).optional(),
  by: MenuitemScalarFieldEnumSchema.array(),
  having: MenuitemScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MenuitemFindUniqueArgsSchema: z.ZodType<Prisma.MenuitemFindUniqueArgs> = z.object({
  select: MenuitemSelectSchema.optional(),
  include: MenuitemIncludeSchema.optional(),
  where: MenuitemWhereUniqueInputSchema,
}).strict()

export const MenuitemFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MenuitemFindUniqueOrThrowArgs> = z.object({
  select: MenuitemSelectSchema.optional(),
  include: MenuitemIncludeSchema.optional(),
  where: MenuitemWhereUniqueInputSchema,
}).strict()

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const KeyFindFirstArgsSchema: z.ZodType<Prisma.KeyFindFirstArgs> = z.object({
  select: KeySelectSchema.optional(),
  include: KeyIncludeSchema.optional(),
  where: KeyWhereInputSchema.optional(),
  orderBy: z.union([ KeyOrderByWithRelationInputSchema.array(),KeyOrderByWithRelationInputSchema ]).optional(),
  cursor: KeyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ KeyScalarFieldEnumSchema,KeyScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const KeyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.KeyFindFirstOrThrowArgs> = z.object({
  select: KeySelectSchema.optional(),
  include: KeyIncludeSchema.optional(),
  where: KeyWhereInputSchema.optional(),
  orderBy: z.union([ KeyOrderByWithRelationInputSchema.array(),KeyOrderByWithRelationInputSchema ]).optional(),
  cursor: KeyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ KeyScalarFieldEnumSchema,KeyScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const KeyFindManyArgsSchema: z.ZodType<Prisma.KeyFindManyArgs> = z.object({
  select: KeySelectSchema.optional(),
  include: KeyIncludeSchema.optional(),
  where: KeyWhereInputSchema.optional(),
  orderBy: z.union([ KeyOrderByWithRelationInputSchema.array(),KeyOrderByWithRelationInputSchema ]).optional(),
  cursor: KeyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ KeyScalarFieldEnumSchema,KeyScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const KeyAggregateArgsSchema: z.ZodType<Prisma.KeyAggregateArgs> = z.object({
  where: KeyWhereInputSchema.optional(),
  orderBy: z.union([ KeyOrderByWithRelationInputSchema.array(),KeyOrderByWithRelationInputSchema ]).optional(),
  cursor: KeyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const KeyGroupByArgsSchema: z.ZodType<Prisma.KeyGroupByArgs> = z.object({
  where: KeyWhereInputSchema.optional(),
  orderBy: z.union([ KeyOrderByWithAggregationInputSchema.array(),KeyOrderByWithAggregationInputSchema ]).optional(),
  by: KeyScalarFieldEnumSchema.array(),
  having: KeyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const KeyFindUniqueArgsSchema: z.ZodType<Prisma.KeyFindUniqueArgs> = z.object({
  select: KeySelectSchema.optional(),
  include: KeyIncludeSchema.optional(),
  where: KeyWhereUniqueInputSchema,
}).strict()

export const KeyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.KeyFindUniqueOrThrowArgs> = z.object({
  select: KeySelectSchema.optional(),
  include: KeyIncludeSchema.optional(),
  where: KeyWhereUniqueInputSchema,
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

export const MainmenuCreateArgsSchema: z.ZodType<Prisma.MainmenuCreateArgs> = z.object({
  select: MainmenuSelectSchema.optional(),
  include: MainmenuIncludeSchema.optional(),
  data: z.union([ MainmenuCreateInputSchema,MainmenuUncheckedCreateInputSchema ]),
}).strict()

export const MainmenuUpsertArgsSchema: z.ZodType<Prisma.MainmenuUpsertArgs> = z.object({
  select: MainmenuSelectSchema.optional(),
  include: MainmenuIncludeSchema.optional(),
  where: MainmenuWhereUniqueInputSchema,
  create: z.union([ MainmenuCreateInputSchema,MainmenuUncheckedCreateInputSchema ]),
  update: z.union([ MainmenuUpdateInputSchema,MainmenuUncheckedUpdateInputSchema ]),
}).strict()

export const MainmenuCreateManyArgsSchema: z.ZodType<Prisma.MainmenuCreateManyArgs> = z.object({
  data: z.union([ MainmenuCreateManyInputSchema,MainmenuCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MainmenuDeleteArgsSchema: z.ZodType<Prisma.MainmenuDeleteArgs> = z.object({
  select: MainmenuSelectSchema.optional(),
  include: MainmenuIncludeSchema.optional(),
  where: MainmenuWhereUniqueInputSchema,
}).strict()

export const MainmenuUpdateArgsSchema: z.ZodType<Prisma.MainmenuUpdateArgs> = z.object({
  select: MainmenuSelectSchema.optional(),
  include: MainmenuIncludeSchema.optional(),
  data: z.union([ MainmenuUpdateInputSchema,MainmenuUncheckedUpdateInputSchema ]),
  where: MainmenuWhereUniqueInputSchema,
}).strict()

export const MainmenuUpdateManyArgsSchema: z.ZodType<Prisma.MainmenuUpdateManyArgs> = z.object({
  data: z.union([ MainmenuUpdateManyMutationInputSchema,MainmenuUncheckedUpdateManyInputSchema ]),
  where: MainmenuWhereInputSchema.optional(),
}).strict()

export const MainmenuDeleteManyArgsSchema: z.ZodType<Prisma.MainmenuDeleteManyArgs> = z.object({
  where: MainmenuWhereInputSchema.optional(),
}).strict()

export const MenuitemCreateArgsSchema: z.ZodType<Prisma.MenuitemCreateArgs> = z.object({
  select: MenuitemSelectSchema.optional(),
  include: MenuitemIncludeSchema.optional(),
  data: z.union([ MenuitemCreateInputSchema,MenuitemUncheckedCreateInputSchema ]),
}).strict()

export const MenuitemUpsertArgsSchema: z.ZodType<Prisma.MenuitemUpsertArgs> = z.object({
  select: MenuitemSelectSchema.optional(),
  include: MenuitemIncludeSchema.optional(),
  where: MenuitemWhereUniqueInputSchema,
  create: z.union([ MenuitemCreateInputSchema,MenuitemUncheckedCreateInputSchema ]),
  update: z.union([ MenuitemUpdateInputSchema,MenuitemUncheckedUpdateInputSchema ]),
}).strict()

export const MenuitemCreateManyArgsSchema: z.ZodType<Prisma.MenuitemCreateManyArgs> = z.object({
  data: z.union([ MenuitemCreateManyInputSchema,MenuitemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MenuitemDeleteArgsSchema: z.ZodType<Prisma.MenuitemDeleteArgs> = z.object({
  select: MenuitemSelectSchema.optional(),
  include: MenuitemIncludeSchema.optional(),
  where: MenuitemWhereUniqueInputSchema,
}).strict()

export const MenuitemUpdateArgsSchema: z.ZodType<Prisma.MenuitemUpdateArgs> = z.object({
  select: MenuitemSelectSchema.optional(),
  include: MenuitemIncludeSchema.optional(),
  data: z.union([ MenuitemUpdateInputSchema,MenuitemUncheckedUpdateInputSchema ]),
  where: MenuitemWhereUniqueInputSchema,
}).strict()

export const MenuitemUpdateManyArgsSchema: z.ZodType<Prisma.MenuitemUpdateManyArgs> = z.object({
  data: z.union([ MenuitemUpdateManyMutationInputSchema,MenuitemUncheckedUpdateManyInputSchema ]),
  where: MenuitemWhereInputSchema.optional(),
}).strict()

export const MenuitemDeleteManyArgsSchema: z.ZodType<Prisma.MenuitemDeleteManyArgs> = z.object({
  where: MenuitemWhereInputSchema.optional(),
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict()

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict()

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict()

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict()

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict()

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict()

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict()

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict()

export const KeyCreateArgsSchema: z.ZodType<Prisma.KeyCreateArgs> = z.object({
  select: KeySelectSchema.optional(),
  include: KeyIncludeSchema.optional(),
  data: z.union([ KeyCreateInputSchema,KeyUncheckedCreateInputSchema ]),
}).strict()

export const KeyUpsertArgsSchema: z.ZodType<Prisma.KeyUpsertArgs> = z.object({
  select: KeySelectSchema.optional(),
  include: KeyIncludeSchema.optional(),
  where: KeyWhereUniqueInputSchema,
  create: z.union([ KeyCreateInputSchema,KeyUncheckedCreateInputSchema ]),
  update: z.union([ KeyUpdateInputSchema,KeyUncheckedUpdateInputSchema ]),
}).strict()

export const KeyCreateManyArgsSchema: z.ZodType<Prisma.KeyCreateManyArgs> = z.object({
  data: z.union([ KeyCreateManyInputSchema,KeyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const KeyDeleteArgsSchema: z.ZodType<Prisma.KeyDeleteArgs> = z.object({
  select: KeySelectSchema.optional(),
  include: KeyIncludeSchema.optional(),
  where: KeyWhereUniqueInputSchema,
}).strict()

export const KeyUpdateArgsSchema: z.ZodType<Prisma.KeyUpdateArgs> = z.object({
  select: KeySelectSchema.optional(),
  include: KeyIncludeSchema.optional(),
  data: z.union([ KeyUpdateInputSchema,KeyUncheckedUpdateInputSchema ]),
  where: KeyWhereUniqueInputSchema,
}).strict()

export const KeyUpdateManyArgsSchema: z.ZodType<Prisma.KeyUpdateManyArgs> = z.object({
  data: z.union([ KeyUpdateManyMutationInputSchema,KeyUncheckedUpdateManyInputSchema ]),
  where: KeyWhereInputSchema.optional(),
}).strict()

export const KeyDeleteManyArgsSchema: z.ZodType<Prisma.KeyDeleteManyArgs> = z.object({
  where: KeyWhereInputSchema.optional(),
}).strict()