
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model EarlyAccess
 * 
 */
export type EarlyAccess = $Result.DefaultSelection<Prisma.$EarlyAccessPayload>
/**
 * Model Trial
 * 
 */
export type Trial = $Result.DefaultSelection<Prisma.$TrialPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Feature
 * 
 */
export type Feature = $Result.DefaultSelection<Prisma.$FeaturePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model DayTask
 * 
 */
export type DayTask = $Result.DefaultSelection<Prisma.$DayTaskPayload>
/**
 * Model BuildLog
 * 
 */
export type BuildLog = $Result.DefaultSelection<Prisma.$BuildLogPayload>
/**
 * Model DailyStreak
 * 
 */
export type DailyStreak = $Result.DefaultSelection<Prisma.$DailyStreakPayload>
/**
 * Model AiLog
 * 
 */
export type AiLog = $Result.DefaultSelection<Prisma.$AiLogPayload>
/**
 * Model TokenUsage
 * 
 */
export type TokenUsage = $Result.DefaultSelection<Prisma.$TokenUsagePayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccessTier: {
  BETA: 'BETA',
  PRELAUNCH: 'PRELAUNCH',
  NORMAL: 'NORMAL',
  BASE: 'BASE',
  PRO: 'PRO'
};

export type AccessTier = (typeof AccessTier)[keyof typeof AccessTier]


export const TaskStatus: {
  backlog: 'backlog',
  in_progress: 'in_progress',
  done: 'done',
  skipped: 'skipped',
  blocked: 'blocked'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

}

export type AccessTier = $Enums.AccessTier

export const AccessTier: typeof $Enums.AccessTier

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.earlyAccess`: Exposes CRUD operations for the **EarlyAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EarlyAccesses
    * const earlyAccesses = await prisma.earlyAccess.findMany()
    * ```
    */
  get earlyAccess(): Prisma.EarlyAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trial`: Exposes CRUD operations for the **Trial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trials
    * const trials = await prisma.trial.findMany()
    * ```
    */
  get trial(): Prisma.TrialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.feature.findMany()
    * ```
    */
  get feature(): Prisma.FeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dayTask`: Exposes CRUD operations for the **DayTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayTasks
    * const dayTasks = await prisma.dayTask.findMany()
    * ```
    */
  get dayTask(): Prisma.DayTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buildLog`: Exposes CRUD operations for the **BuildLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BuildLogs
    * const buildLogs = await prisma.buildLog.findMany()
    * ```
    */
  get buildLog(): Prisma.BuildLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyStreak`: Exposes CRUD operations for the **DailyStreak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyStreaks
    * const dailyStreaks = await prisma.dailyStreak.findMany()
    * ```
    */
  get dailyStreak(): Prisma.DailyStreakDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiLog`: Exposes CRUD operations for the **AiLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiLogs
    * const aiLogs = await prisma.aiLog.findMany()
    * ```
    */
  get aiLog(): Prisma.AiLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenUsage`: Exposes CRUD operations for the **TokenUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenUsages
    * const tokenUsages = await prisma.tokenUsage.findMany()
    * ```
    */
  get tokenUsage(): Prisma.TokenUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    EarlyAccess: 'EarlyAccess',
    Trial: 'Trial',
    Product: 'Product',
    Feature: 'Feature',
    Task: 'Task',
    DayTask: 'DayTask',
    BuildLog: 'BuildLog',
    DailyStreak: 'DailyStreak',
    AiLog: 'AiLog',
    TokenUsage: 'TokenUsage',
    Settings: 'Settings',
    Subscription: 'Subscription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "earlyAccess" | "trial" | "product" | "feature" | "task" | "dayTask" | "buildLog" | "dailyStreak" | "aiLog" | "tokenUsage" | "settings" | "subscription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EarlyAccess: {
        payload: Prisma.$EarlyAccessPayload<ExtArgs>
        fields: Prisma.EarlyAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EarlyAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarlyAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EarlyAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarlyAccessPayload>
          }
          findFirst: {
            args: Prisma.EarlyAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarlyAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EarlyAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarlyAccessPayload>
          }
          findMany: {
            args: Prisma.EarlyAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarlyAccessPayload>[]
          }
          create: {
            args: Prisma.EarlyAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarlyAccessPayload>
          }
          createMany: {
            args: Prisma.EarlyAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EarlyAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarlyAccessPayload>[]
          }
          delete: {
            args: Prisma.EarlyAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarlyAccessPayload>
          }
          update: {
            args: Prisma.EarlyAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarlyAccessPayload>
          }
          deleteMany: {
            args: Prisma.EarlyAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EarlyAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EarlyAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarlyAccessPayload>[]
          }
          upsert: {
            args: Prisma.EarlyAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarlyAccessPayload>
          }
          aggregate: {
            args: Prisma.EarlyAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEarlyAccess>
          }
          groupBy: {
            args: Prisma.EarlyAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<EarlyAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.EarlyAccessCountArgs<ExtArgs>
            result: $Utils.Optional<EarlyAccessCountAggregateOutputType> | number
          }
        }
      }
      Trial: {
        payload: Prisma.$TrialPayload<ExtArgs>
        fields: Prisma.TrialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrialPayload>
          }
          findFirst: {
            args: Prisma.TrialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrialPayload>
          }
          findMany: {
            args: Prisma.TrialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrialPayload>[]
          }
          create: {
            args: Prisma.TrialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrialPayload>
          }
          createMany: {
            args: Prisma.TrialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrialPayload>[]
          }
          delete: {
            args: Prisma.TrialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrialPayload>
          }
          update: {
            args: Prisma.TrialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrialPayload>
          }
          deleteMany: {
            args: Prisma.TrialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrialPayload>[]
          }
          upsert: {
            args: Prisma.TrialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrialPayload>
          }
          aggregate: {
            args: Prisma.TrialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrial>
          }
          groupBy: {
            args: Prisma.TrialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrialCountArgs<ExtArgs>
            result: $Utils.Optional<TrialCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Feature: {
        payload: Prisma.$FeaturePayload<ExtArgs>
        fields: Prisma.FeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findFirst: {
            args: Prisma.FeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findMany: {
            args: Prisma.FeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          create: {
            args: Prisma.FeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          createMany: {
            args: Prisma.FeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          delete: {
            args: Prisma.FeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          update: {
            args: Prisma.FeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          deleteMany: {
            args: Prisma.FeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          upsert: {
            args: Prisma.FeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeature>
          }
          groupBy: {
            args: Prisma.FeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      DayTask: {
        payload: Prisma.$DayTaskPayload<ExtArgs>
        fields: Prisma.DayTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayTaskPayload>
          }
          findFirst: {
            args: Prisma.DayTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayTaskPayload>
          }
          findMany: {
            args: Prisma.DayTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayTaskPayload>[]
          }
          create: {
            args: Prisma.DayTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayTaskPayload>
          }
          createMany: {
            args: Prisma.DayTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DayTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayTaskPayload>[]
          }
          delete: {
            args: Prisma.DayTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayTaskPayload>
          }
          update: {
            args: Prisma.DayTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayTaskPayload>
          }
          deleteMany: {
            args: Prisma.DayTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DayTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DayTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayTaskPayload>[]
          }
          upsert: {
            args: Prisma.DayTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayTaskPayload>
          }
          aggregate: {
            args: Prisma.DayTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDayTask>
          }
          groupBy: {
            args: Prisma.DayTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<DayTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayTaskCountArgs<ExtArgs>
            result: $Utils.Optional<DayTaskCountAggregateOutputType> | number
          }
        }
      }
      BuildLog: {
        payload: Prisma.$BuildLogPayload<ExtArgs>
        fields: Prisma.BuildLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildLogPayload>
          }
          findFirst: {
            args: Prisma.BuildLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildLogPayload>
          }
          findMany: {
            args: Prisma.BuildLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildLogPayload>[]
          }
          create: {
            args: Prisma.BuildLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildLogPayload>
          }
          createMany: {
            args: Prisma.BuildLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildLogPayload>[]
          }
          delete: {
            args: Prisma.BuildLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildLogPayload>
          }
          update: {
            args: Prisma.BuildLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildLogPayload>
          }
          deleteMany: {
            args: Prisma.BuildLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuildLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildLogPayload>[]
          }
          upsert: {
            args: Prisma.BuildLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildLogPayload>
          }
          aggregate: {
            args: Prisma.BuildLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuildLog>
          }
          groupBy: {
            args: Prisma.BuildLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildLogCountArgs<ExtArgs>
            result: $Utils.Optional<BuildLogCountAggregateOutputType> | number
          }
        }
      }
      DailyStreak: {
        payload: Prisma.$DailyStreakPayload<ExtArgs>
        fields: Prisma.DailyStreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyStreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyStreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          findFirst: {
            args: Prisma.DailyStreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyStreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          findMany: {
            args: Prisma.DailyStreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>[]
          }
          create: {
            args: Prisma.DailyStreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          createMany: {
            args: Prisma.DailyStreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyStreakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>[]
          }
          delete: {
            args: Prisma.DailyStreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          update: {
            args: Prisma.DailyStreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          deleteMany: {
            args: Prisma.DailyStreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyStreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyStreakUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>[]
          }
          upsert: {
            args: Prisma.DailyStreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStreakPayload>
          }
          aggregate: {
            args: Prisma.DailyStreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyStreak>
          }
          groupBy: {
            args: Prisma.DailyStreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyStreakGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyStreakCountArgs<ExtArgs>
            result: $Utils.Optional<DailyStreakCountAggregateOutputType> | number
          }
        }
      }
      AiLog: {
        payload: Prisma.$AiLogPayload<ExtArgs>
        fields: Prisma.AiLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          findFirst: {
            args: Prisma.AiLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          findMany: {
            args: Prisma.AiLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>[]
          }
          create: {
            args: Prisma.AiLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          createMany: {
            args: Prisma.AiLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>[]
          }
          delete: {
            args: Prisma.AiLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          update: {
            args: Prisma.AiLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          deleteMany: {
            args: Prisma.AiLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>[]
          }
          upsert: {
            args: Prisma.AiLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          aggregate: {
            args: Prisma.AiLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiLog>
          }
          groupBy: {
            args: Prisma.AiLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiLogCountArgs<ExtArgs>
            result: $Utils.Optional<AiLogCountAggregateOutputType> | number
          }
        }
      }
      TokenUsage: {
        payload: Prisma.$TokenUsagePayload<ExtArgs>
        fields: Prisma.TokenUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          findFirst: {
            args: Prisma.TokenUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          findMany: {
            args: Prisma.TokenUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>[]
          }
          create: {
            args: Prisma.TokenUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          createMany: {
            args: Prisma.TokenUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>[]
          }
          delete: {
            args: Prisma.TokenUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          update: {
            args: Prisma.TokenUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          deleteMany: {
            args: Prisma.TokenUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>[]
          }
          upsert: {
            args: Prisma.TokenUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenUsagePayload>
          }
          aggregate: {
            args: Prisma.TokenUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenUsage>
          }
          groupBy: {
            args: Prisma.TokenUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenUsageCountArgs<ExtArgs>
            result: $Utils.Optional<TokenUsageCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    earlyAccess?: EarlyAccessOmit
    trial?: TrialOmit
    product?: ProductOmit
    feature?: FeatureOmit
    task?: TaskOmit
    dayTask?: DayTaskOmit
    buildLog?: BuildLogOmit
    dailyStreak?: DailyStreakOmit
    aiLog?: AiLogOmit
    tokenUsage?: TokenUsageOmit
    settings?: SettingsOmit
    subscription?: SubscriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    products: number
    buildLogs: number
    DailyStreak: number
    aiLogs: number
    tokenUsages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | UserCountOutputTypeCountProductsArgs
    buildLogs?: boolean | UserCountOutputTypeCountBuildLogsArgs
    DailyStreak?: boolean | UserCountOutputTypeCountDailyStreakArgs
    aiLogs?: boolean | UserCountOutputTypeCountAiLogsArgs
    tokenUsages?: boolean | UserCountOutputTypeCountTokenUsagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBuildLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyStreakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyStreakWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokenUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenUsageWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    features: number
    buildLogs: number
    DailyStreak: number
    aiLogs: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | ProductCountOutputTypeCountFeaturesArgs
    buildLogs?: boolean | ProductCountOutputTypeCountBuildLogsArgs
    DailyStreak?: boolean | ProductCountOutputTypeCountDailyStreakArgs
    aiLogs?: boolean | ProductCountOutputTypeCountAiLogsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBuildLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildLogWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDailyStreakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyStreakWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountAiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiLogWhereInput
  }


  /**
   * Count Type FeatureCountOutputType
   */

  export type FeatureCountOutputType = {
    tasks: number
  }

  export type FeatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | FeatureCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureCountOutputType
     */
    select?: FeatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type BuildLogCountOutputType
   */

  export type BuildLogCountOutputType = {
    DayTask: number
  }

  export type BuildLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DayTask?: boolean | BuildLogCountOutputTypeCountDayTaskArgs
  }

  // Custom InputTypes
  /**
   * BuildLogCountOutputType without action
   */
  export type BuildLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLogCountOutputType
     */
    select?: BuildLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BuildLogCountOutputType without action
   */
  export type BuildLogCountOutputTypeCountDayTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayTaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    bestStreakOverall: number | null
  }

  export type UserSumAggregateOutputType = {
    bestStreakOverall: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    username: string | null
    onboardingCompleted: boolean | null
    discovery: string | null
    role: string | null
    bestStreakOverall: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    username: string | null
    onboardingCompleted: boolean | null
    discovery: string | null
    role: string | null
    bestStreakOverall: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    name: number
    username: number
    onboardingCompleted: number
    discovery: number
    role: number
    bestStreakOverall: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    bestStreakOverall?: true
  }

  export type UserSumAggregateInputType = {
    bestStreakOverall?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    username?: true
    onboardingCompleted?: true
    discovery?: true
    role?: true
    bestStreakOverall?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    username?: true
    onboardingCompleted?: true
    discovery?: true
    role?: true
    bestStreakOverall?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    username?: true
    onboardingCompleted?: true
    discovery?: true
    role?: true
    bestStreakOverall?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    name: string
    username: string | null
    onboardingCompleted: boolean
    discovery: string | null
    role: string | null
    bestStreakOverall: number
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    onboardingCompleted?: boolean
    discovery?: boolean
    role?: boolean
    bestStreakOverall?: boolean
    createdAt?: boolean
    products?: boolean | User$productsArgs<ExtArgs>
    buildLogs?: boolean | User$buildLogsArgs<ExtArgs>
    trial?: boolean | User$trialArgs<ExtArgs>
    DailyStreak?: boolean | User$DailyStreakArgs<ExtArgs>
    aiLogs?: boolean | User$aiLogsArgs<ExtArgs>
    tokenUsages?: boolean | User$tokenUsagesArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    Subscription?: boolean | User$SubscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    onboardingCompleted?: boolean
    discovery?: boolean
    role?: boolean
    bestStreakOverall?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    onboardingCompleted?: boolean
    discovery?: boolean
    role?: boolean
    bestStreakOverall?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    onboardingCompleted?: boolean
    discovery?: boolean
    role?: boolean
    bestStreakOverall?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "name" | "username" | "onboardingCompleted" | "discovery" | "role" | "bestStreakOverall" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | User$productsArgs<ExtArgs>
    buildLogs?: boolean | User$buildLogsArgs<ExtArgs>
    trial?: boolean | User$trialArgs<ExtArgs>
    DailyStreak?: boolean | User$DailyStreakArgs<ExtArgs>
    aiLogs?: boolean | User$aiLogsArgs<ExtArgs>
    tokenUsages?: boolean | User$tokenUsagesArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    Subscription?: boolean | User$SubscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      buildLogs: Prisma.$BuildLogPayload<ExtArgs>[]
      trial: Prisma.$TrialPayload<ExtArgs> | null
      DailyStreak: Prisma.$DailyStreakPayload<ExtArgs>[]
      aiLogs: Prisma.$AiLogPayload<ExtArgs>[]
      tokenUsages: Prisma.$TokenUsagePayload<ExtArgs>[]
      settings: Prisma.$SettingsPayload<ExtArgs> | null
      Subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      name: string
      username: string | null
      onboardingCompleted: boolean
      discovery: string | null
      role: string | null
      bestStreakOverall: number
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends User$productsArgs<ExtArgs> = {}>(args?: Subset<T, User$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buildLogs<T extends User$buildLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$buildLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trial<T extends User$trialArgs<ExtArgs> = {}>(args?: Subset<T, User$trialArgs<ExtArgs>>): Prisma__TrialClient<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    DailyStreak<T extends User$DailyStreakArgs<ExtArgs> = {}>(args?: Subset<T, User$DailyStreakArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiLogs<T extends User$aiLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokenUsages<T extends User$tokenUsagesArgs<ExtArgs> = {}>(args?: Subset<T, User$tokenUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Subscription<T extends User$SubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$SubscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly onboardingCompleted: FieldRef<"User", 'Boolean'>
    readonly discovery: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly bestStreakOverall: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.products
   */
  export type User$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.buildLogs
   */
  export type User$buildLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    where?: BuildLogWhereInput
    orderBy?: BuildLogOrderByWithRelationInput | BuildLogOrderByWithRelationInput[]
    cursor?: BuildLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildLogScalarFieldEnum | BuildLogScalarFieldEnum[]
  }

  /**
   * User.trial
   */
  export type User$trialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialInclude<ExtArgs> | null
    where?: TrialWhereInput
  }

  /**
   * User.DailyStreak
   */
  export type User$DailyStreakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    where?: DailyStreakWhereInput
    orderBy?: DailyStreakOrderByWithRelationInput | DailyStreakOrderByWithRelationInput[]
    cursor?: DailyStreakWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyStreakScalarFieldEnum | DailyStreakScalarFieldEnum[]
  }

  /**
   * User.aiLogs
   */
  export type User$aiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
    where?: AiLogWhereInput
    orderBy?: AiLogOrderByWithRelationInput | AiLogOrderByWithRelationInput[]
    cursor?: AiLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiLogScalarFieldEnum | AiLogScalarFieldEnum[]
  }

  /**
   * User.tokenUsages
   */
  export type User$tokenUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    where?: TokenUsageWhereInput
    orderBy?: TokenUsageOrderByWithRelationInput | TokenUsageOrderByWithRelationInput[]
    cursor?: TokenUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenUsageScalarFieldEnum | TokenUsageScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    where?: SettingsWhereInput
  }

  /**
   * User.Subscription
   */
  export type User$SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model EarlyAccess
   */

  export type AggregateEarlyAccess = {
    _count: EarlyAccessCountAggregateOutputType | null
    _min: EarlyAccessMinAggregateOutputType | null
    _max: EarlyAccessMaxAggregateOutputType | null
  }

  export type EarlyAccessMinAggregateOutputType = {
    id: string | null
    email: string | null
    tier: $Enums.AccessTier | null
    invited: boolean | null
    claimed: boolean | null
    claimedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EarlyAccessMaxAggregateOutputType = {
    id: string | null
    email: string | null
    tier: $Enums.AccessTier | null
    invited: boolean | null
    claimed: boolean | null
    claimedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EarlyAccessCountAggregateOutputType = {
    id: number
    email: number
    tier: number
    invited: number
    claimed: number
    claimedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EarlyAccessMinAggregateInputType = {
    id?: true
    email?: true
    tier?: true
    invited?: true
    claimed?: true
    claimedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EarlyAccessMaxAggregateInputType = {
    id?: true
    email?: true
    tier?: true
    invited?: true
    claimed?: true
    claimedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EarlyAccessCountAggregateInputType = {
    id?: true
    email?: true
    tier?: true
    invited?: true
    claimed?: true
    claimedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EarlyAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EarlyAccess to aggregate.
     */
    where?: EarlyAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EarlyAccesses to fetch.
     */
    orderBy?: EarlyAccessOrderByWithRelationInput | EarlyAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EarlyAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EarlyAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EarlyAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EarlyAccesses
    **/
    _count?: true | EarlyAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EarlyAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EarlyAccessMaxAggregateInputType
  }

  export type GetEarlyAccessAggregateType<T extends EarlyAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateEarlyAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEarlyAccess[P]>
      : GetScalarType<T[P], AggregateEarlyAccess[P]>
  }




  export type EarlyAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EarlyAccessWhereInput
    orderBy?: EarlyAccessOrderByWithAggregationInput | EarlyAccessOrderByWithAggregationInput[]
    by: EarlyAccessScalarFieldEnum[] | EarlyAccessScalarFieldEnum
    having?: EarlyAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EarlyAccessCountAggregateInputType | true
    _min?: EarlyAccessMinAggregateInputType
    _max?: EarlyAccessMaxAggregateInputType
  }

  export type EarlyAccessGroupByOutputType = {
    id: string
    email: string
    tier: $Enums.AccessTier
    invited: boolean
    claimed: boolean
    claimedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EarlyAccessCountAggregateOutputType | null
    _min: EarlyAccessMinAggregateOutputType | null
    _max: EarlyAccessMaxAggregateOutputType | null
  }

  type GetEarlyAccessGroupByPayload<T extends EarlyAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EarlyAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EarlyAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EarlyAccessGroupByOutputType[P]>
            : GetScalarType<T[P], EarlyAccessGroupByOutputType[P]>
        }
      >
    >


  export type EarlyAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    tier?: boolean
    invited?: boolean
    claimed?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["earlyAccess"]>

  export type EarlyAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    tier?: boolean
    invited?: boolean
    claimed?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["earlyAccess"]>

  export type EarlyAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    tier?: boolean
    invited?: boolean
    claimed?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["earlyAccess"]>

  export type EarlyAccessSelectScalar = {
    id?: boolean
    email?: boolean
    tier?: boolean
    invited?: boolean
    claimed?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EarlyAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "tier" | "invited" | "claimed" | "claimedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["earlyAccess"]>

  export type $EarlyAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EarlyAccess"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      tier: $Enums.AccessTier
      invited: boolean
      claimed: boolean
      claimedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["earlyAccess"]>
    composites: {}
  }

  type EarlyAccessGetPayload<S extends boolean | null | undefined | EarlyAccessDefaultArgs> = $Result.GetResult<Prisma.$EarlyAccessPayload, S>

  type EarlyAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EarlyAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EarlyAccessCountAggregateInputType | true
    }

  export interface EarlyAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EarlyAccess'], meta: { name: 'EarlyAccess' } }
    /**
     * Find zero or one EarlyAccess that matches the filter.
     * @param {EarlyAccessFindUniqueArgs} args - Arguments to find a EarlyAccess
     * @example
     * // Get one EarlyAccess
     * const earlyAccess = await prisma.earlyAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EarlyAccessFindUniqueArgs>(args: SelectSubset<T, EarlyAccessFindUniqueArgs<ExtArgs>>): Prisma__EarlyAccessClient<$Result.GetResult<Prisma.$EarlyAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EarlyAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EarlyAccessFindUniqueOrThrowArgs} args - Arguments to find a EarlyAccess
     * @example
     * // Get one EarlyAccess
     * const earlyAccess = await prisma.earlyAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EarlyAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, EarlyAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EarlyAccessClient<$Result.GetResult<Prisma.$EarlyAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EarlyAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarlyAccessFindFirstArgs} args - Arguments to find a EarlyAccess
     * @example
     * // Get one EarlyAccess
     * const earlyAccess = await prisma.earlyAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EarlyAccessFindFirstArgs>(args?: SelectSubset<T, EarlyAccessFindFirstArgs<ExtArgs>>): Prisma__EarlyAccessClient<$Result.GetResult<Prisma.$EarlyAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EarlyAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarlyAccessFindFirstOrThrowArgs} args - Arguments to find a EarlyAccess
     * @example
     * // Get one EarlyAccess
     * const earlyAccess = await prisma.earlyAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EarlyAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, EarlyAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__EarlyAccessClient<$Result.GetResult<Prisma.$EarlyAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EarlyAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarlyAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EarlyAccesses
     * const earlyAccesses = await prisma.earlyAccess.findMany()
     * 
     * // Get first 10 EarlyAccesses
     * const earlyAccesses = await prisma.earlyAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const earlyAccessWithIdOnly = await prisma.earlyAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EarlyAccessFindManyArgs>(args?: SelectSubset<T, EarlyAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarlyAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EarlyAccess.
     * @param {EarlyAccessCreateArgs} args - Arguments to create a EarlyAccess.
     * @example
     * // Create one EarlyAccess
     * const EarlyAccess = await prisma.earlyAccess.create({
     *   data: {
     *     // ... data to create a EarlyAccess
     *   }
     * })
     * 
     */
    create<T extends EarlyAccessCreateArgs>(args: SelectSubset<T, EarlyAccessCreateArgs<ExtArgs>>): Prisma__EarlyAccessClient<$Result.GetResult<Prisma.$EarlyAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EarlyAccesses.
     * @param {EarlyAccessCreateManyArgs} args - Arguments to create many EarlyAccesses.
     * @example
     * // Create many EarlyAccesses
     * const earlyAccess = await prisma.earlyAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EarlyAccessCreateManyArgs>(args?: SelectSubset<T, EarlyAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EarlyAccesses and returns the data saved in the database.
     * @param {EarlyAccessCreateManyAndReturnArgs} args - Arguments to create many EarlyAccesses.
     * @example
     * // Create many EarlyAccesses
     * const earlyAccess = await prisma.earlyAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EarlyAccesses and only return the `id`
     * const earlyAccessWithIdOnly = await prisma.earlyAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EarlyAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, EarlyAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarlyAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EarlyAccess.
     * @param {EarlyAccessDeleteArgs} args - Arguments to delete one EarlyAccess.
     * @example
     * // Delete one EarlyAccess
     * const EarlyAccess = await prisma.earlyAccess.delete({
     *   where: {
     *     // ... filter to delete one EarlyAccess
     *   }
     * })
     * 
     */
    delete<T extends EarlyAccessDeleteArgs>(args: SelectSubset<T, EarlyAccessDeleteArgs<ExtArgs>>): Prisma__EarlyAccessClient<$Result.GetResult<Prisma.$EarlyAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EarlyAccess.
     * @param {EarlyAccessUpdateArgs} args - Arguments to update one EarlyAccess.
     * @example
     * // Update one EarlyAccess
     * const earlyAccess = await prisma.earlyAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EarlyAccessUpdateArgs>(args: SelectSubset<T, EarlyAccessUpdateArgs<ExtArgs>>): Prisma__EarlyAccessClient<$Result.GetResult<Prisma.$EarlyAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EarlyAccesses.
     * @param {EarlyAccessDeleteManyArgs} args - Arguments to filter EarlyAccesses to delete.
     * @example
     * // Delete a few EarlyAccesses
     * const { count } = await prisma.earlyAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EarlyAccessDeleteManyArgs>(args?: SelectSubset<T, EarlyAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EarlyAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarlyAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EarlyAccesses
     * const earlyAccess = await prisma.earlyAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EarlyAccessUpdateManyArgs>(args: SelectSubset<T, EarlyAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EarlyAccesses and returns the data updated in the database.
     * @param {EarlyAccessUpdateManyAndReturnArgs} args - Arguments to update many EarlyAccesses.
     * @example
     * // Update many EarlyAccesses
     * const earlyAccess = await prisma.earlyAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EarlyAccesses and only return the `id`
     * const earlyAccessWithIdOnly = await prisma.earlyAccess.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EarlyAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, EarlyAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarlyAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EarlyAccess.
     * @param {EarlyAccessUpsertArgs} args - Arguments to update or create a EarlyAccess.
     * @example
     * // Update or create a EarlyAccess
     * const earlyAccess = await prisma.earlyAccess.upsert({
     *   create: {
     *     // ... data to create a EarlyAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EarlyAccess we want to update
     *   }
     * })
     */
    upsert<T extends EarlyAccessUpsertArgs>(args: SelectSubset<T, EarlyAccessUpsertArgs<ExtArgs>>): Prisma__EarlyAccessClient<$Result.GetResult<Prisma.$EarlyAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EarlyAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarlyAccessCountArgs} args - Arguments to filter EarlyAccesses to count.
     * @example
     * // Count the number of EarlyAccesses
     * const count = await prisma.earlyAccess.count({
     *   where: {
     *     // ... the filter for the EarlyAccesses we want to count
     *   }
     * })
    **/
    count<T extends EarlyAccessCountArgs>(
      args?: Subset<T, EarlyAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EarlyAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EarlyAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarlyAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EarlyAccessAggregateArgs>(args: Subset<T, EarlyAccessAggregateArgs>): Prisma.PrismaPromise<GetEarlyAccessAggregateType<T>>

    /**
     * Group by EarlyAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarlyAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EarlyAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EarlyAccessGroupByArgs['orderBy'] }
        : { orderBy?: EarlyAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EarlyAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEarlyAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EarlyAccess model
   */
  readonly fields: EarlyAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EarlyAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EarlyAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EarlyAccess model
   */
  interface EarlyAccessFieldRefs {
    readonly id: FieldRef<"EarlyAccess", 'String'>
    readonly email: FieldRef<"EarlyAccess", 'String'>
    readonly tier: FieldRef<"EarlyAccess", 'AccessTier'>
    readonly invited: FieldRef<"EarlyAccess", 'Boolean'>
    readonly claimed: FieldRef<"EarlyAccess", 'Boolean'>
    readonly claimedAt: FieldRef<"EarlyAccess", 'DateTime'>
    readonly createdAt: FieldRef<"EarlyAccess", 'DateTime'>
    readonly updatedAt: FieldRef<"EarlyAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EarlyAccess findUnique
   */
  export type EarlyAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
    /**
     * Filter, which EarlyAccess to fetch.
     */
    where: EarlyAccessWhereUniqueInput
  }

  /**
   * EarlyAccess findUniqueOrThrow
   */
  export type EarlyAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
    /**
     * Filter, which EarlyAccess to fetch.
     */
    where: EarlyAccessWhereUniqueInput
  }

  /**
   * EarlyAccess findFirst
   */
  export type EarlyAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
    /**
     * Filter, which EarlyAccess to fetch.
     */
    where?: EarlyAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EarlyAccesses to fetch.
     */
    orderBy?: EarlyAccessOrderByWithRelationInput | EarlyAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EarlyAccesses.
     */
    cursor?: EarlyAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EarlyAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EarlyAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EarlyAccesses.
     */
    distinct?: EarlyAccessScalarFieldEnum | EarlyAccessScalarFieldEnum[]
  }

  /**
   * EarlyAccess findFirstOrThrow
   */
  export type EarlyAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
    /**
     * Filter, which EarlyAccess to fetch.
     */
    where?: EarlyAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EarlyAccesses to fetch.
     */
    orderBy?: EarlyAccessOrderByWithRelationInput | EarlyAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EarlyAccesses.
     */
    cursor?: EarlyAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EarlyAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EarlyAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EarlyAccesses.
     */
    distinct?: EarlyAccessScalarFieldEnum | EarlyAccessScalarFieldEnum[]
  }

  /**
   * EarlyAccess findMany
   */
  export type EarlyAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
    /**
     * Filter, which EarlyAccesses to fetch.
     */
    where?: EarlyAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EarlyAccesses to fetch.
     */
    orderBy?: EarlyAccessOrderByWithRelationInput | EarlyAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EarlyAccesses.
     */
    cursor?: EarlyAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EarlyAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EarlyAccesses.
     */
    skip?: number
    distinct?: EarlyAccessScalarFieldEnum | EarlyAccessScalarFieldEnum[]
  }

  /**
   * EarlyAccess create
   */
  export type EarlyAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
    /**
     * The data needed to create a EarlyAccess.
     */
    data: XOR<EarlyAccessCreateInput, EarlyAccessUncheckedCreateInput>
  }

  /**
   * EarlyAccess createMany
   */
  export type EarlyAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EarlyAccesses.
     */
    data: EarlyAccessCreateManyInput | EarlyAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EarlyAccess createManyAndReturn
   */
  export type EarlyAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
    /**
     * The data used to create many EarlyAccesses.
     */
    data: EarlyAccessCreateManyInput | EarlyAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EarlyAccess update
   */
  export type EarlyAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
    /**
     * The data needed to update a EarlyAccess.
     */
    data: XOR<EarlyAccessUpdateInput, EarlyAccessUncheckedUpdateInput>
    /**
     * Choose, which EarlyAccess to update.
     */
    where: EarlyAccessWhereUniqueInput
  }

  /**
   * EarlyAccess updateMany
   */
  export type EarlyAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EarlyAccesses.
     */
    data: XOR<EarlyAccessUpdateManyMutationInput, EarlyAccessUncheckedUpdateManyInput>
    /**
     * Filter which EarlyAccesses to update
     */
    where?: EarlyAccessWhereInput
    /**
     * Limit how many EarlyAccesses to update.
     */
    limit?: number
  }

  /**
   * EarlyAccess updateManyAndReturn
   */
  export type EarlyAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
    /**
     * The data used to update EarlyAccesses.
     */
    data: XOR<EarlyAccessUpdateManyMutationInput, EarlyAccessUncheckedUpdateManyInput>
    /**
     * Filter which EarlyAccesses to update
     */
    where?: EarlyAccessWhereInput
    /**
     * Limit how many EarlyAccesses to update.
     */
    limit?: number
  }

  /**
   * EarlyAccess upsert
   */
  export type EarlyAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
    /**
     * The filter to search for the EarlyAccess to update in case it exists.
     */
    where: EarlyAccessWhereUniqueInput
    /**
     * In case the EarlyAccess found by the `where` argument doesn't exist, create a new EarlyAccess with this data.
     */
    create: XOR<EarlyAccessCreateInput, EarlyAccessUncheckedCreateInput>
    /**
     * In case the EarlyAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EarlyAccessUpdateInput, EarlyAccessUncheckedUpdateInput>
  }

  /**
   * EarlyAccess delete
   */
  export type EarlyAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
    /**
     * Filter which EarlyAccess to delete.
     */
    where: EarlyAccessWhereUniqueInput
  }

  /**
   * EarlyAccess deleteMany
   */
  export type EarlyAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EarlyAccesses to delete
     */
    where?: EarlyAccessWhereInput
    /**
     * Limit how many EarlyAccesses to delete.
     */
    limit?: number
  }

  /**
   * EarlyAccess without action
   */
  export type EarlyAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarlyAccess
     */
    select?: EarlyAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EarlyAccess
     */
    omit?: EarlyAccessOmit<ExtArgs> | null
  }


  /**
   * Model Trial
   */

  export type AggregateTrial = {
    _count: TrialCountAggregateOutputType | null
    _min: TrialMinAggregateOutputType | null
    _max: TrialMaxAggregateOutputType | null
  }

  export type TrialMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: $Enums.AccessTier | null
    startDate: Date | null
    endDate: Date | null
    expired: boolean | null
  }

  export type TrialMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: $Enums.AccessTier | null
    startDate: Date | null
    endDate: Date | null
    expired: boolean | null
  }

  export type TrialCountAggregateOutputType = {
    id: number
    userId: number
    plan: number
    startDate: number
    endDate: number
    expired: number
    _all: number
  }


  export type TrialMinAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    startDate?: true
    endDate?: true
    expired?: true
  }

  export type TrialMaxAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    startDate?: true
    endDate?: true
    expired?: true
  }

  export type TrialCountAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    startDate?: true
    endDate?: true
    expired?: true
    _all?: true
  }

  export type TrialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trial to aggregate.
     */
    where?: TrialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trials to fetch.
     */
    orderBy?: TrialOrderByWithRelationInput | TrialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trials
    **/
    _count?: true | TrialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrialMaxAggregateInputType
  }

  export type GetTrialAggregateType<T extends TrialAggregateArgs> = {
        [P in keyof T & keyof AggregateTrial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrial[P]>
      : GetScalarType<T[P], AggregateTrial[P]>
  }




  export type TrialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrialWhereInput
    orderBy?: TrialOrderByWithAggregationInput | TrialOrderByWithAggregationInput[]
    by: TrialScalarFieldEnum[] | TrialScalarFieldEnum
    having?: TrialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrialCountAggregateInputType | true
    _min?: TrialMinAggregateInputType
    _max?: TrialMaxAggregateInputType
  }

  export type TrialGroupByOutputType = {
    id: string
    userId: string
    plan: $Enums.AccessTier
    startDate: Date
    endDate: Date
    expired: boolean
    _count: TrialCountAggregateOutputType | null
    _min: TrialMinAggregateOutputType | null
    _max: TrialMaxAggregateOutputType | null
  }

  type GetTrialGroupByPayload<T extends TrialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrialGroupByOutputType[P]>
            : GetScalarType<T[P], TrialGroupByOutputType[P]>
        }
      >
    >


  export type TrialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    startDate?: boolean
    endDate?: boolean
    expired?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trial"]>

  export type TrialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    startDate?: boolean
    endDate?: boolean
    expired?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trial"]>

  export type TrialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    startDate?: boolean
    endDate?: boolean
    expired?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trial"]>

  export type TrialSelectScalar = {
    id?: boolean
    userId?: boolean
    plan?: boolean
    startDate?: boolean
    endDate?: boolean
    expired?: boolean
  }

  export type TrialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "plan" | "startDate" | "endDate" | "expired", ExtArgs["result"]["trial"]>
  export type TrialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TrialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trial"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plan: $Enums.AccessTier
      startDate: Date
      endDate: Date
      expired: boolean
    }, ExtArgs["result"]["trial"]>
    composites: {}
  }

  type TrialGetPayload<S extends boolean | null | undefined | TrialDefaultArgs> = $Result.GetResult<Prisma.$TrialPayload, S>

  type TrialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrialCountAggregateInputType | true
    }

  export interface TrialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trial'], meta: { name: 'Trial' } }
    /**
     * Find zero or one Trial that matches the filter.
     * @param {TrialFindUniqueArgs} args - Arguments to find a Trial
     * @example
     * // Get one Trial
     * const trial = await prisma.trial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrialFindUniqueArgs>(args: SelectSubset<T, TrialFindUniqueArgs<ExtArgs>>): Prisma__TrialClient<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrialFindUniqueOrThrowArgs} args - Arguments to find a Trial
     * @example
     * // Get one Trial
     * const trial = await prisma.trial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrialFindUniqueOrThrowArgs>(args: SelectSubset<T, TrialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrialClient<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrialFindFirstArgs} args - Arguments to find a Trial
     * @example
     * // Get one Trial
     * const trial = await prisma.trial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrialFindFirstArgs>(args?: SelectSubset<T, TrialFindFirstArgs<ExtArgs>>): Prisma__TrialClient<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrialFindFirstOrThrowArgs} args - Arguments to find a Trial
     * @example
     * // Get one Trial
     * const trial = await prisma.trial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrialFindFirstOrThrowArgs>(args?: SelectSubset<T, TrialFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrialClient<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trials
     * const trials = await prisma.trial.findMany()
     * 
     * // Get first 10 Trials
     * const trials = await prisma.trial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trialWithIdOnly = await prisma.trial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrialFindManyArgs>(args?: SelectSubset<T, TrialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trial.
     * @param {TrialCreateArgs} args - Arguments to create a Trial.
     * @example
     * // Create one Trial
     * const Trial = await prisma.trial.create({
     *   data: {
     *     // ... data to create a Trial
     *   }
     * })
     * 
     */
    create<T extends TrialCreateArgs>(args: SelectSubset<T, TrialCreateArgs<ExtArgs>>): Prisma__TrialClient<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trials.
     * @param {TrialCreateManyArgs} args - Arguments to create many Trials.
     * @example
     * // Create many Trials
     * const trial = await prisma.trial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrialCreateManyArgs>(args?: SelectSubset<T, TrialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trials and returns the data saved in the database.
     * @param {TrialCreateManyAndReturnArgs} args - Arguments to create many Trials.
     * @example
     * // Create many Trials
     * const trial = await prisma.trial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trials and only return the `id`
     * const trialWithIdOnly = await prisma.trial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrialCreateManyAndReturnArgs>(args?: SelectSubset<T, TrialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trial.
     * @param {TrialDeleteArgs} args - Arguments to delete one Trial.
     * @example
     * // Delete one Trial
     * const Trial = await prisma.trial.delete({
     *   where: {
     *     // ... filter to delete one Trial
     *   }
     * })
     * 
     */
    delete<T extends TrialDeleteArgs>(args: SelectSubset<T, TrialDeleteArgs<ExtArgs>>): Prisma__TrialClient<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trial.
     * @param {TrialUpdateArgs} args - Arguments to update one Trial.
     * @example
     * // Update one Trial
     * const trial = await prisma.trial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrialUpdateArgs>(args: SelectSubset<T, TrialUpdateArgs<ExtArgs>>): Prisma__TrialClient<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trials.
     * @param {TrialDeleteManyArgs} args - Arguments to filter Trials to delete.
     * @example
     * // Delete a few Trials
     * const { count } = await prisma.trial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrialDeleteManyArgs>(args?: SelectSubset<T, TrialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trials
     * const trial = await prisma.trial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrialUpdateManyArgs>(args: SelectSubset<T, TrialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trials and returns the data updated in the database.
     * @param {TrialUpdateManyAndReturnArgs} args - Arguments to update many Trials.
     * @example
     * // Update many Trials
     * const trial = await prisma.trial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trials and only return the `id`
     * const trialWithIdOnly = await prisma.trial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrialUpdateManyAndReturnArgs>(args: SelectSubset<T, TrialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trial.
     * @param {TrialUpsertArgs} args - Arguments to update or create a Trial.
     * @example
     * // Update or create a Trial
     * const trial = await prisma.trial.upsert({
     *   create: {
     *     // ... data to create a Trial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trial we want to update
     *   }
     * })
     */
    upsert<T extends TrialUpsertArgs>(args: SelectSubset<T, TrialUpsertArgs<ExtArgs>>): Prisma__TrialClient<$Result.GetResult<Prisma.$TrialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrialCountArgs} args - Arguments to filter Trials to count.
     * @example
     * // Count the number of Trials
     * const count = await prisma.trial.count({
     *   where: {
     *     // ... the filter for the Trials we want to count
     *   }
     * })
    **/
    count<T extends TrialCountArgs>(
      args?: Subset<T, TrialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrialAggregateArgs>(args: Subset<T, TrialAggregateArgs>): Prisma.PrismaPromise<GetTrialAggregateType<T>>

    /**
     * Group by Trial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrialGroupByArgs['orderBy'] }
        : { orderBy?: TrialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trial model
   */
  readonly fields: TrialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trial model
   */
  interface TrialFieldRefs {
    readonly id: FieldRef<"Trial", 'String'>
    readonly userId: FieldRef<"Trial", 'String'>
    readonly plan: FieldRef<"Trial", 'AccessTier'>
    readonly startDate: FieldRef<"Trial", 'DateTime'>
    readonly endDate: FieldRef<"Trial", 'DateTime'>
    readonly expired: FieldRef<"Trial", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Trial findUnique
   */
  export type TrialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialInclude<ExtArgs> | null
    /**
     * Filter, which Trial to fetch.
     */
    where: TrialWhereUniqueInput
  }

  /**
   * Trial findUniqueOrThrow
   */
  export type TrialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialInclude<ExtArgs> | null
    /**
     * Filter, which Trial to fetch.
     */
    where: TrialWhereUniqueInput
  }

  /**
   * Trial findFirst
   */
  export type TrialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialInclude<ExtArgs> | null
    /**
     * Filter, which Trial to fetch.
     */
    where?: TrialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trials to fetch.
     */
    orderBy?: TrialOrderByWithRelationInput | TrialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trials.
     */
    cursor?: TrialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trials.
     */
    distinct?: TrialScalarFieldEnum | TrialScalarFieldEnum[]
  }

  /**
   * Trial findFirstOrThrow
   */
  export type TrialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialInclude<ExtArgs> | null
    /**
     * Filter, which Trial to fetch.
     */
    where?: TrialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trials to fetch.
     */
    orderBy?: TrialOrderByWithRelationInput | TrialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trials.
     */
    cursor?: TrialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trials.
     */
    distinct?: TrialScalarFieldEnum | TrialScalarFieldEnum[]
  }

  /**
   * Trial findMany
   */
  export type TrialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialInclude<ExtArgs> | null
    /**
     * Filter, which Trials to fetch.
     */
    where?: TrialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trials to fetch.
     */
    orderBy?: TrialOrderByWithRelationInput | TrialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trials.
     */
    cursor?: TrialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trials.
     */
    skip?: number
    distinct?: TrialScalarFieldEnum | TrialScalarFieldEnum[]
  }

  /**
   * Trial create
   */
  export type TrialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialInclude<ExtArgs> | null
    /**
     * The data needed to create a Trial.
     */
    data: XOR<TrialCreateInput, TrialUncheckedCreateInput>
  }

  /**
   * Trial createMany
   */
  export type TrialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trials.
     */
    data: TrialCreateManyInput | TrialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trial createManyAndReturn
   */
  export type TrialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * The data used to create many Trials.
     */
    data: TrialCreateManyInput | TrialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trial update
   */
  export type TrialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialInclude<ExtArgs> | null
    /**
     * The data needed to update a Trial.
     */
    data: XOR<TrialUpdateInput, TrialUncheckedUpdateInput>
    /**
     * Choose, which Trial to update.
     */
    where: TrialWhereUniqueInput
  }

  /**
   * Trial updateMany
   */
  export type TrialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trials.
     */
    data: XOR<TrialUpdateManyMutationInput, TrialUncheckedUpdateManyInput>
    /**
     * Filter which Trials to update
     */
    where?: TrialWhereInput
    /**
     * Limit how many Trials to update.
     */
    limit?: number
  }

  /**
   * Trial updateManyAndReturn
   */
  export type TrialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * The data used to update Trials.
     */
    data: XOR<TrialUpdateManyMutationInput, TrialUncheckedUpdateManyInput>
    /**
     * Filter which Trials to update
     */
    where?: TrialWhereInput
    /**
     * Limit how many Trials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trial upsert
   */
  export type TrialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialInclude<ExtArgs> | null
    /**
     * The filter to search for the Trial to update in case it exists.
     */
    where: TrialWhereUniqueInput
    /**
     * In case the Trial found by the `where` argument doesn't exist, create a new Trial with this data.
     */
    create: XOR<TrialCreateInput, TrialUncheckedCreateInput>
    /**
     * In case the Trial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrialUpdateInput, TrialUncheckedUpdateInput>
  }

  /**
   * Trial delete
   */
  export type TrialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialInclude<ExtArgs> | null
    /**
     * Filter which Trial to delete.
     */
    where: TrialWhereUniqueInput
  }

  /**
   * Trial deleteMany
   */
  export type TrialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trials to delete
     */
    where?: TrialWhereInput
    /**
     * Limit how many Trials to delete.
     */
    limit?: number
  }

  /**
   * Trial without action
   */
  export type TrialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trial
     */
    select?: TrialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trial
     */
    omit?: TrialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrialInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    currentStreak: number | null
    AllTimeBestStreak: number | null
    dailyCommitmentHrs: number | null
  }

  export type ProductSumAggregateOutputType = {
    currentStreak: number | null
    AllTimeBestStreak: number | null
    dailyCommitmentHrs: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    problemStatement: string | null
    targetAudience: string | null
    userGoals: string | null
    uniqueValueProp: string | null
    isMvpGenerated: boolean | null
    isRoadmapGenerated: boolean | null
    currentStreak: number | null
    AllTimeBestStreak: number | null
    active: boolean | null
    techStack: string | null
    inspirationApps: string | null
    initialFeatures: string | null
    startDate: Date | null
    deadline: Date | null
    dailyCommitmentHrs: number | null
    userId: string | null
    mvpSummary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    problemStatement: string | null
    targetAudience: string | null
    userGoals: string | null
    uniqueValueProp: string | null
    isMvpGenerated: boolean | null
    isRoadmapGenerated: boolean | null
    currentStreak: number | null
    AllTimeBestStreak: number | null
    active: boolean | null
    techStack: string | null
    inspirationApps: string | null
    initialFeatures: string | null
    startDate: Date | null
    deadline: Date | null
    dailyCommitmentHrs: number | null
    userId: string | null
    mvpSummary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    problemStatement: number
    targetAudience: number
    userGoals: number
    uniqueValueProp: number
    isMvpGenerated: number
    isRoadmapGenerated: number
    currentStreak: number
    AllTimeBestStreak: number
    active: number
    techStack: number
    inspirationApps: number
    initialFeatures: number
    startDate: number
    deadline: number
    dailyCommitmentHrs: number
    userId: number
    mvpSummary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    currentStreak?: true
    AllTimeBestStreak?: true
    dailyCommitmentHrs?: true
  }

  export type ProductSumAggregateInputType = {
    currentStreak?: true
    AllTimeBestStreak?: true
    dailyCommitmentHrs?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    problemStatement?: true
    targetAudience?: true
    userGoals?: true
    uniqueValueProp?: true
    isMvpGenerated?: true
    isRoadmapGenerated?: true
    currentStreak?: true
    AllTimeBestStreak?: true
    active?: true
    techStack?: true
    inspirationApps?: true
    initialFeatures?: true
    startDate?: true
    deadline?: true
    dailyCommitmentHrs?: true
    userId?: true
    mvpSummary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    problemStatement?: true
    targetAudience?: true
    userGoals?: true
    uniqueValueProp?: true
    isMvpGenerated?: true
    isRoadmapGenerated?: true
    currentStreak?: true
    AllTimeBestStreak?: true
    active?: true
    techStack?: true
    inspirationApps?: true
    initialFeatures?: true
    startDate?: true
    deadline?: true
    dailyCommitmentHrs?: true
    userId?: true
    mvpSummary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    problemStatement?: true
    targetAudience?: true
    userGoals?: true
    uniqueValueProp?: true
    isMvpGenerated?: true
    isRoadmapGenerated?: true
    currentStreak?: true
    AllTimeBestStreak?: true
    active?: true
    techStack?: true
    inspirationApps?: true
    initialFeatures?: true
    startDate?: true
    deadline?: true
    dailyCommitmentHrs?: true
    userId?: true
    mvpSummary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated: boolean
    isRoadmapGenerated: boolean
    currentStreak: number
    AllTimeBestStreak: number
    active: boolean
    techStack: string | null
    inspirationApps: string | null
    initialFeatures: string | null
    startDate: Date
    deadline: Date
    dailyCommitmentHrs: number
    userId: string
    mvpSummary: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    problemStatement?: boolean
    targetAudience?: boolean
    userGoals?: boolean
    uniqueValueProp?: boolean
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: boolean
    AllTimeBestStreak?: boolean
    active?: boolean
    techStack?: boolean
    inspirationApps?: boolean
    initialFeatures?: boolean
    startDate?: boolean
    deadline?: boolean
    dailyCommitmentHrs?: boolean
    userId?: boolean
    mvpSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    features?: boolean | Product$featuresArgs<ExtArgs>
    buildLogs?: boolean | Product$buildLogsArgs<ExtArgs>
    DailyStreak?: boolean | Product$DailyStreakArgs<ExtArgs>
    aiLogs?: boolean | Product$aiLogsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    problemStatement?: boolean
    targetAudience?: boolean
    userGoals?: boolean
    uniqueValueProp?: boolean
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: boolean
    AllTimeBestStreak?: boolean
    active?: boolean
    techStack?: boolean
    inspirationApps?: boolean
    initialFeatures?: boolean
    startDate?: boolean
    deadline?: boolean
    dailyCommitmentHrs?: boolean
    userId?: boolean
    mvpSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    problemStatement?: boolean
    targetAudience?: boolean
    userGoals?: boolean
    uniqueValueProp?: boolean
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: boolean
    AllTimeBestStreak?: boolean
    active?: boolean
    techStack?: boolean
    inspirationApps?: boolean
    initialFeatures?: boolean
    startDate?: boolean
    deadline?: boolean
    dailyCommitmentHrs?: boolean
    userId?: boolean
    mvpSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    problemStatement?: boolean
    targetAudience?: boolean
    userGoals?: boolean
    uniqueValueProp?: boolean
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: boolean
    AllTimeBestStreak?: boolean
    active?: boolean
    techStack?: boolean
    inspirationApps?: boolean
    initialFeatures?: boolean
    startDate?: boolean
    deadline?: boolean
    dailyCommitmentHrs?: boolean
    userId?: boolean
    mvpSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "problemStatement" | "targetAudience" | "userGoals" | "uniqueValueProp" | "isMvpGenerated" | "isRoadmapGenerated" | "currentStreak" | "AllTimeBestStreak" | "active" | "techStack" | "inspirationApps" | "initialFeatures" | "startDate" | "deadline" | "dailyCommitmentHrs" | "userId" | "mvpSummary" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    features?: boolean | Product$featuresArgs<ExtArgs>
    buildLogs?: boolean | Product$buildLogsArgs<ExtArgs>
    DailyStreak?: boolean | Product$DailyStreakArgs<ExtArgs>
    aiLogs?: boolean | Product$aiLogsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      features: Prisma.$FeaturePayload<ExtArgs>[]
      buildLogs: Prisma.$BuildLogPayload<ExtArgs>[]
      DailyStreak: Prisma.$DailyStreakPayload<ExtArgs>[]
      aiLogs: Prisma.$AiLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      problemStatement: string
      targetAudience: string
      userGoals: string
      uniqueValueProp: string
      isMvpGenerated: boolean
      isRoadmapGenerated: boolean
      currentStreak: number
      AllTimeBestStreak: number
      active: boolean
      techStack: string | null
      inspirationApps: string | null
      initialFeatures: string | null
      startDate: Date
      deadline: Date
      dailyCommitmentHrs: number
      userId: string
      mvpSummary: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    features<T extends Product$featuresArgs<ExtArgs> = {}>(args?: Subset<T, Product$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buildLogs<T extends Product$buildLogsArgs<ExtArgs> = {}>(args?: Subset<T, Product$buildLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DailyStreak<T extends Product$DailyStreakArgs<ExtArgs> = {}>(args?: Subset<T, Product$DailyStreakArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiLogs<T extends Product$aiLogsArgs<ExtArgs> = {}>(args?: Subset<T, Product$aiLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly problemStatement: FieldRef<"Product", 'String'>
    readonly targetAudience: FieldRef<"Product", 'String'>
    readonly userGoals: FieldRef<"Product", 'String'>
    readonly uniqueValueProp: FieldRef<"Product", 'String'>
    readonly isMvpGenerated: FieldRef<"Product", 'Boolean'>
    readonly isRoadmapGenerated: FieldRef<"Product", 'Boolean'>
    readonly currentStreak: FieldRef<"Product", 'Int'>
    readonly AllTimeBestStreak: FieldRef<"Product", 'Int'>
    readonly active: FieldRef<"Product", 'Boolean'>
    readonly techStack: FieldRef<"Product", 'String'>
    readonly inspirationApps: FieldRef<"Product", 'String'>
    readonly initialFeatures: FieldRef<"Product", 'String'>
    readonly startDate: FieldRef<"Product", 'DateTime'>
    readonly deadline: FieldRef<"Product", 'DateTime'>
    readonly dailyCommitmentHrs: FieldRef<"Product", 'Float'>
    readonly userId: FieldRef<"Product", 'String'>
    readonly mvpSummary: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.features
   */
  export type Product$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    cursor?: FeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Product.buildLogs
   */
  export type Product$buildLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    where?: BuildLogWhereInput
    orderBy?: BuildLogOrderByWithRelationInput | BuildLogOrderByWithRelationInput[]
    cursor?: BuildLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildLogScalarFieldEnum | BuildLogScalarFieldEnum[]
  }

  /**
   * Product.DailyStreak
   */
  export type Product$DailyStreakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    where?: DailyStreakWhereInput
    orderBy?: DailyStreakOrderByWithRelationInput | DailyStreakOrderByWithRelationInput[]
    cursor?: DailyStreakWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyStreakScalarFieldEnum | DailyStreakScalarFieldEnum[]
  }

  /**
   * Product.aiLogs
   */
  export type Product$aiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
    where?: AiLogWhereInput
    orderBy?: AiLogOrderByWithRelationInput | AiLogOrderByWithRelationInput[]
    cursor?: AiLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiLogScalarFieldEnum | AiLogScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null
    _avg: FeatureAvgAggregateOutputType | null
    _sum: FeatureSumAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  export type FeatureAvgAggregateOutputType = {
    rank: number | null
  }

  export type FeatureSumAggregateOutputType = {
    rank: number | null
  }

  export type FeatureMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    rank: number | null
    productId: string | null
  }

  export type FeatureMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    rank: number | null
    productId: string | null
  }

  export type FeatureCountAggregateOutputType = {
    id: number
    name: number
    description: number
    rank: number
    productId: number
    _all: number
  }


  export type FeatureAvgAggregateInputType = {
    rank?: true
  }

  export type FeatureSumAggregateInputType = {
    rank?: true
  }

  export type FeatureMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rank?: true
    productId?: true
  }

  export type FeatureMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rank?: true
    productId?: true
  }

  export type FeatureCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rank?: true
    productId?: true
    _all?: true
  }

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType
  }

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>
  }




  export type FeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithAggregationInput | FeatureOrderByWithAggregationInput[]
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum
    having?: FeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCountAggregateInputType | true
    _avg?: FeatureAvgAggregateInputType
    _sum?: FeatureSumAggregateInputType
    _min?: FeatureMinAggregateInputType
    _max?: FeatureMaxAggregateInputType
  }

  export type FeatureGroupByOutputType = {
    id: string
    name: string
    description: string
    rank: number
    productId: string
    _count: FeatureCountAggregateOutputType | null
    _avg: FeatureAvgAggregateOutputType | null
    _sum: FeatureSumAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
        }
      >
    >


  export type FeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rank?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    tasks?: boolean | Feature$tasksArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rank?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rank?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    rank?: boolean
    productId?: boolean
  }

  export type FeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "rank" | "productId", ExtArgs["result"]["feature"]>
  export type FeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    tasks?: boolean | Feature$tasksArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type FeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $FeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feature"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      rank: number
      productId: string
    }, ExtArgs["result"]["feature"]>
    composites: {}
  }

  type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = $Result.GetResult<Prisma.$FeaturePayload, S>

  type FeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureCountAggregateInputType | true
    }

  export interface FeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feature'], meta: { name: 'Feature' } }
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFindUniqueArgs>(args: SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFindFirstArgs>(args?: SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureWithIdOnly = await prisma.feature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureFindManyArgs>(args?: SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     * 
     */
    create<T extends FeatureCreateArgs>(args: SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Features.
     * @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureCreateManyArgs>(args?: SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Features and returns the data saved in the database.
     * @param {FeatureCreateManyAndReturnArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     * 
     */
    delete<T extends FeatureDeleteArgs>(args: SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureUpdateArgs>(args: SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureDeleteManyArgs>(args?: SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureUpdateManyArgs>(args: SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features and returns the data updated in the database.
     * @param {FeatureUpdateManyAndReturnArgs} args - Arguments to update many Features.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     */
    upsert<T extends FeatureUpsertArgs>(args: SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(
      args?: Subset<T, FeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeatureAggregateArgs>(args: Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feature model
   */
  readonly fields: FeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Feature$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Feature$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feature model
   */
  interface FeatureFieldRefs {
    readonly id: FieldRef<"Feature", 'String'>
    readonly name: FieldRef<"Feature", 'String'>
    readonly description: FieldRef<"Feature", 'String'>
    readonly rank: FieldRef<"Feature", 'Int'>
    readonly productId: FieldRef<"Feature", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feature findUnique
   */
  export type FeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findUniqueOrThrow
   */
  export type FeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findFirst
   */
  export type FeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findFirstOrThrow
   */
  export type FeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findMany
   */
  export type FeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Features to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature create
   */
  export type FeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Feature.
     */
    data: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
  }

  /**
   * Feature createMany
   */
  export type FeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature createManyAndReturn
   */
  export type FeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feature update
   */
  export type FeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Feature.
     */
    data: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
    /**
     * Choose, which Feature to update.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature updateMany
   */
  export type FeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature updateManyAndReturn
   */
  export type FeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feature upsert
   */
  export type FeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: FeatureWhereUniqueInput
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
  }

  /**
   * Feature delete
   */
  export type FeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter which Feature to delete.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature deleteMany
   */
  export type FeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to delete.
     */
    limit?: number
  }

  /**
   * Feature.tasks
   */
  export type Feature$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Feature without action
   */
  export type FeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    estimatedHours: number | null
    dayNumber: number | null
  }

  export type TaskSumAggregateOutputType = {
    estimatedHours: number | null
    dayNumber: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    estimatedHours: number | null
    status: $Enums.TaskStatus | null
    dayNumber: number | null
    completed: boolean | null
    featureId: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    estimatedHours: number | null
    status: $Enums.TaskStatus | null
    dayNumber: number | null
    completed: boolean | null
    featureId: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    estimatedHours: number
    status: number
    dayNumber: number
    completed: number
    featureId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    estimatedHours?: true
    dayNumber?: true
  }

  export type TaskSumAggregateInputType = {
    estimatedHours?: true
    dayNumber?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    estimatedHours?: true
    status?: true
    dayNumber?: true
    completed?: true
    featureId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    estimatedHours?: true
    status?: true
    dayNumber?: true
    completed?: true
    featureId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    estimatedHours?: true
    status?: true
    dayNumber?: true
    completed?: true
    featureId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    estimatedHours: number | null
    status: $Enums.TaskStatus
    dayNumber: number | null
    completed: boolean
    featureId: string
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    estimatedHours?: boolean
    status?: boolean
    dayNumber?: boolean
    completed?: boolean
    featureId?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    dayTask?: boolean | Task$dayTaskArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    estimatedHours?: boolean
    status?: boolean
    dayNumber?: boolean
    completed?: boolean
    featureId?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    estimatedHours?: boolean
    status?: boolean
    dayNumber?: boolean
    completed?: boolean
    featureId?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    estimatedHours?: boolean
    status?: boolean
    dayNumber?: boolean
    completed?: boolean
    featureId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "estimatedHours" | "status" | "dayNumber" | "completed" | "featureId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    dayTask?: boolean | Task$dayTaskArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      feature: Prisma.$FeaturePayload<ExtArgs>
      dayTask: Prisma.$DayTaskPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      estimatedHours: number | null
      status: $Enums.TaskStatus
      dayNumber: number | null
      completed: boolean
      featureId: string
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feature<T extends FeatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureDefaultArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dayTask<T extends Task$dayTaskArgs<ExtArgs> = {}>(args?: Subset<T, Task$dayTaskArgs<ExtArgs>>): Prisma__DayTaskClient<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly estimatedHours: FieldRef<"Task", 'Float'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly dayNumber: FieldRef<"Task", 'Int'>
    readonly completed: FieldRef<"Task", 'Boolean'>
    readonly featureId: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.dayTask
   */
  export type Task$dayTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
    where?: DayTaskWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model DayTask
   */

  export type AggregateDayTask = {
    _count: DayTaskCountAggregateOutputType | null
    _avg: DayTaskAvgAggregateOutputType | null
    _sum: DayTaskSumAggregateOutputType | null
    _min: DayTaskMinAggregateOutputType | null
    _max: DayTaskMaxAggregateOutputType | null
  }

  export type DayTaskAvgAggregateOutputType = {
    dayIndex: number | null
  }

  export type DayTaskSumAggregateOutputType = {
    dayIndex: number | null
  }

  export type DayTaskMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    dayIndex: number | null
    dueDate: Date | null
    completedAt: Date | null
    category: string | null
    description: string | null
    status: string | null
    milestoneGoal: string | null
    shipCheck: string | null
    buildLogId: string | null
  }

  export type DayTaskMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    dayIndex: number | null
    dueDate: Date | null
    completedAt: Date | null
    category: string | null
    description: string | null
    status: string | null
    milestoneGoal: string | null
    shipCheck: string | null
    buildLogId: string | null
  }

  export type DayTaskCountAggregateOutputType = {
    id: number
    taskId: number
    dayIndex: number
    dueDate: number
    completedAt: number
    category: number
    description: number
    status: number
    milestoneGoal: number
    shipCheck: number
    buildLogId: number
    _all: number
  }


  export type DayTaskAvgAggregateInputType = {
    dayIndex?: true
  }

  export type DayTaskSumAggregateInputType = {
    dayIndex?: true
  }

  export type DayTaskMinAggregateInputType = {
    id?: true
    taskId?: true
    dayIndex?: true
    dueDate?: true
    completedAt?: true
    category?: true
    description?: true
    status?: true
    milestoneGoal?: true
    shipCheck?: true
    buildLogId?: true
  }

  export type DayTaskMaxAggregateInputType = {
    id?: true
    taskId?: true
    dayIndex?: true
    dueDate?: true
    completedAt?: true
    category?: true
    description?: true
    status?: true
    milestoneGoal?: true
    shipCheck?: true
    buildLogId?: true
  }

  export type DayTaskCountAggregateInputType = {
    id?: true
    taskId?: true
    dayIndex?: true
    dueDate?: true
    completedAt?: true
    category?: true
    description?: true
    status?: true
    milestoneGoal?: true
    shipCheck?: true
    buildLogId?: true
    _all?: true
  }

  export type DayTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayTask to aggregate.
     */
    where?: DayTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayTasks to fetch.
     */
    orderBy?: DayTaskOrderByWithRelationInput | DayTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DayTasks
    **/
    _count?: true | DayTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DayTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayTaskMaxAggregateInputType
  }

  export type GetDayTaskAggregateType<T extends DayTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateDayTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayTask[P]>
      : GetScalarType<T[P], AggregateDayTask[P]>
  }




  export type DayTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayTaskWhereInput
    orderBy?: DayTaskOrderByWithAggregationInput | DayTaskOrderByWithAggregationInput[]
    by: DayTaskScalarFieldEnum[] | DayTaskScalarFieldEnum
    having?: DayTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayTaskCountAggregateInputType | true
    _avg?: DayTaskAvgAggregateInputType
    _sum?: DayTaskSumAggregateInputType
    _min?: DayTaskMinAggregateInputType
    _max?: DayTaskMaxAggregateInputType
  }

  export type DayTaskGroupByOutputType = {
    id: string
    taskId: string
    dayIndex: number
    dueDate: Date
    completedAt: Date | null
    category: string
    description: string
    status: string
    milestoneGoal: string | null
    shipCheck: string | null
    buildLogId: string | null
    _count: DayTaskCountAggregateOutputType | null
    _avg: DayTaskAvgAggregateOutputType | null
    _sum: DayTaskSumAggregateOutputType | null
    _min: DayTaskMinAggregateOutputType | null
    _max: DayTaskMaxAggregateOutputType | null
  }

  type GetDayTaskGroupByPayload<T extends DayTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayTaskGroupByOutputType[P]>
            : GetScalarType<T[P], DayTaskGroupByOutputType[P]>
        }
      >
    >


  export type DayTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    dayIndex?: boolean
    dueDate?: boolean
    completedAt?: boolean
    category?: boolean
    description?: boolean
    status?: boolean
    milestoneGoal?: boolean
    shipCheck?: boolean
    buildLogId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    buildLog?: boolean | DayTask$buildLogArgs<ExtArgs>
  }, ExtArgs["result"]["dayTask"]>

  export type DayTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    dayIndex?: boolean
    dueDate?: boolean
    completedAt?: boolean
    category?: boolean
    description?: boolean
    status?: boolean
    milestoneGoal?: boolean
    shipCheck?: boolean
    buildLogId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    buildLog?: boolean | DayTask$buildLogArgs<ExtArgs>
  }, ExtArgs["result"]["dayTask"]>

  export type DayTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    dayIndex?: boolean
    dueDate?: boolean
    completedAt?: boolean
    category?: boolean
    description?: boolean
    status?: boolean
    milestoneGoal?: boolean
    shipCheck?: boolean
    buildLogId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    buildLog?: boolean | DayTask$buildLogArgs<ExtArgs>
  }, ExtArgs["result"]["dayTask"]>

  export type DayTaskSelectScalar = {
    id?: boolean
    taskId?: boolean
    dayIndex?: boolean
    dueDate?: boolean
    completedAt?: boolean
    category?: boolean
    description?: boolean
    status?: boolean
    milestoneGoal?: boolean
    shipCheck?: boolean
    buildLogId?: boolean
  }

  export type DayTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "dayIndex" | "dueDate" | "completedAt" | "category" | "description" | "status" | "milestoneGoal" | "shipCheck" | "buildLogId", ExtArgs["result"]["dayTask"]>
  export type DayTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    buildLog?: boolean | DayTask$buildLogArgs<ExtArgs>
  }
  export type DayTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    buildLog?: boolean | DayTask$buildLogArgs<ExtArgs>
  }
  export type DayTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    buildLog?: boolean | DayTask$buildLogArgs<ExtArgs>
  }

  export type $DayTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DayTask"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      buildLog: Prisma.$BuildLogPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      dayIndex: number
      dueDate: Date
      completedAt: Date | null
      category: string
      description: string
      status: string
      milestoneGoal: string | null
      shipCheck: string | null
      buildLogId: string | null
    }, ExtArgs["result"]["dayTask"]>
    composites: {}
  }

  type DayTaskGetPayload<S extends boolean | null | undefined | DayTaskDefaultArgs> = $Result.GetResult<Prisma.$DayTaskPayload, S>

  type DayTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DayTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DayTaskCountAggregateInputType | true
    }

  export interface DayTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DayTask'], meta: { name: 'DayTask' } }
    /**
     * Find zero or one DayTask that matches the filter.
     * @param {DayTaskFindUniqueArgs} args - Arguments to find a DayTask
     * @example
     * // Get one DayTask
     * const dayTask = await prisma.dayTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DayTaskFindUniqueArgs>(args: SelectSubset<T, DayTaskFindUniqueArgs<ExtArgs>>): Prisma__DayTaskClient<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DayTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DayTaskFindUniqueOrThrowArgs} args - Arguments to find a DayTask
     * @example
     * // Get one DayTask
     * const dayTask = await prisma.dayTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DayTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, DayTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DayTaskClient<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTaskFindFirstArgs} args - Arguments to find a DayTask
     * @example
     * // Get one DayTask
     * const dayTask = await prisma.dayTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DayTaskFindFirstArgs>(args?: SelectSubset<T, DayTaskFindFirstArgs<ExtArgs>>): Prisma__DayTaskClient<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTaskFindFirstOrThrowArgs} args - Arguments to find a DayTask
     * @example
     * // Get one DayTask
     * const dayTask = await prisma.dayTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DayTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, DayTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__DayTaskClient<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DayTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayTasks
     * const dayTasks = await prisma.dayTask.findMany()
     * 
     * // Get first 10 DayTasks
     * const dayTasks = await prisma.dayTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayTaskWithIdOnly = await prisma.dayTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DayTaskFindManyArgs>(args?: SelectSubset<T, DayTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DayTask.
     * @param {DayTaskCreateArgs} args - Arguments to create a DayTask.
     * @example
     * // Create one DayTask
     * const DayTask = await prisma.dayTask.create({
     *   data: {
     *     // ... data to create a DayTask
     *   }
     * })
     * 
     */
    create<T extends DayTaskCreateArgs>(args: SelectSubset<T, DayTaskCreateArgs<ExtArgs>>): Prisma__DayTaskClient<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DayTasks.
     * @param {DayTaskCreateManyArgs} args - Arguments to create many DayTasks.
     * @example
     * // Create many DayTasks
     * const dayTask = await prisma.dayTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DayTaskCreateManyArgs>(args?: SelectSubset<T, DayTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DayTasks and returns the data saved in the database.
     * @param {DayTaskCreateManyAndReturnArgs} args - Arguments to create many DayTasks.
     * @example
     * // Create many DayTasks
     * const dayTask = await prisma.dayTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DayTasks and only return the `id`
     * const dayTaskWithIdOnly = await prisma.dayTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DayTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, DayTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DayTask.
     * @param {DayTaskDeleteArgs} args - Arguments to delete one DayTask.
     * @example
     * // Delete one DayTask
     * const DayTask = await prisma.dayTask.delete({
     *   where: {
     *     // ... filter to delete one DayTask
     *   }
     * })
     * 
     */
    delete<T extends DayTaskDeleteArgs>(args: SelectSubset<T, DayTaskDeleteArgs<ExtArgs>>): Prisma__DayTaskClient<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DayTask.
     * @param {DayTaskUpdateArgs} args - Arguments to update one DayTask.
     * @example
     * // Update one DayTask
     * const dayTask = await prisma.dayTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DayTaskUpdateArgs>(args: SelectSubset<T, DayTaskUpdateArgs<ExtArgs>>): Prisma__DayTaskClient<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DayTasks.
     * @param {DayTaskDeleteManyArgs} args - Arguments to filter DayTasks to delete.
     * @example
     * // Delete a few DayTasks
     * const { count } = await prisma.dayTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DayTaskDeleteManyArgs>(args?: SelectSubset<T, DayTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayTasks
     * const dayTask = await prisma.dayTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DayTaskUpdateManyArgs>(args: SelectSubset<T, DayTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayTasks and returns the data updated in the database.
     * @param {DayTaskUpdateManyAndReturnArgs} args - Arguments to update many DayTasks.
     * @example
     * // Update many DayTasks
     * const dayTask = await prisma.dayTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DayTasks and only return the `id`
     * const dayTaskWithIdOnly = await prisma.dayTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DayTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, DayTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DayTask.
     * @param {DayTaskUpsertArgs} args - Arguments to update or create a DayTask.
     * @example
     * // Update or create a DayTask
     * const dayTask = await prisma.dayTask.upsert({
     *   create: {
     *     // ... data to create a DayTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayTask we want to update
     *   }
     * })
     */
    upsert<T extends DayTaskUpsertArgs>(args: SelectSubset<T, DayTaskUpsertArgs<ExtArgs>>): Prisma__DayTaskClient<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DayTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTaskCountArgs} args - Arguments to filter DayTasks to count.
     * @example
     * // Count the number of DayTasks
     * const count = await prisma.dayTask.count({
     *   where: {
     *     // ... the filter for the DayTasks we want to count
     *   }
     * })
    **/
    count<T extends DayTaskCountArgs>(
      args?: Subset<T, DayTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayTaskAggregateArgs>(args: Subset<T, DayTaskAggregateArgs>): Prisma.PrismaPromise<GetDayTaskAggregateType<T>>

    /**
     * Group by DayTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayTaskGroupByArgs['orderBy'] }
        : { orderBy?: DayTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DayTask model
   */
  readonly fields: DayTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DayTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buildLog<T extends DayTask$buildLogArgs<ExtArgs> = {}>(args?: Subset<T, DayTask$buildLogArgs<ExtArgs>>): Prisma__BuildLogClient<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DayTask model
   */
  interface DayTaskFieldRefs {
    readonly id: FieldRef<"DayTask", 'String'>
    readonly taskId: FieldRef<"DayTask", 'String'>
    readonly dayIndex: FieldRef<"DayTask", 'Int'>
    readonly dueDate: FieldRef<"DayTask", 'DateTime'>
    readonly completedAt: FieldRef<"DayTask", 'DateTime'>
    readonly category: FieldRef<"DayTask", 'String'>
    readonly description: FieldRef<"DayTask", 'String'>
    readonly status: FieldRef<"DayTask", 'String'>
    readonly milestoneGoal: FieldRef<"DayTask", 'String'>
    readonly shipCheck: FieldRef<"DayTask", 'String'>
    readonly buildLogId: FieldRef<"DayTask", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DayTask findUnique
   */
  export type DayTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
    /**
     * Filter, which DayTask to fetch.
     */
    where: DayTaskWhereUniqueInput
  }

  /**
   * DayTask findUniqueOrThrow
   */
  export type DayTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
    /**
     * Filter, which DayTask to fetch.
     */
    where: DayTaskWhereUniqueInput
  }

  /**
   * DayTask findFirst
   */
  export type DayTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
    /**
     * Filter, which DayTask to fetch.
     */
    where?: DayTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayTasks to fetch.
     */
    orderBy?: DayTaskOrderByWithRelationInput | DayTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayTasks.
     */
    cursor?: DayTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayTasks.
     */
    distinct?: DayTaskScalarFieldEnum | DayTaskScalarFieldEnum[]
  }

  /**
   * DayTask findFirstOrThrow
   */
  export type DayTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
    /**
     * Filter, which DayTask to fetch.
     */
    where?: DayTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayTasks to fetch.
     */
    orderBy?: DayTaskOrderByWithRelationInput | DayTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayTasks.
     */
    cursor?: DayTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayTasks.
     */
    distinct?: DayTaskScalarFieldEnum | DayTaskScalarFieldEnum[]
  }

  /**
   * DayTask findMany
   */
  export type DayTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
    /**
     * Filter, which DayTasks to fetch.
     */
    where?: DayTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayTasks to fetch.
     */
    orderBy?: DayTaskOrderByWithRelationInput | DayTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DayTasks.
     */
    cursor?: DayTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayTasks.
     */
    skip?: number
    distinct?: DayTaskScalarFieldEnum | DayTaskScalarFieldEnum[]
  }

  /**
   * DayTask create
   */
  export type DayTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a DayTask.
     */
    data: XOR<DayTaskCreateInput, DayTaskUncheckedCreateInput>
  }

  /**
   * DayTask createMany
   */
  export type DayTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DayTasks.
     */
    data: DayTaskCreateManyInput | DayTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DayTask createManyAndReturn
   */
  export type DayTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * The data used to create many DayTasks.
     */
    data: DayTaskCreateManyInput | DayTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DayTask update
   */
  export type DayTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a DayTask.
     */
    data: XOR<DayTaskUpdateInput, DayTaskUncheckedUpdateInput>
    /**
     * Choose, which DayTask to update.
     */
    where: DayTaskWhereUniqueInput
  }

  /**
   * DayTask updateMany
   */
  export type DayTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DayTasks.
     */
    data: XOR<DayTaskUpdateManyMutationInput, DayTaskUncheckedUpdateManyInput>
    /**
     * Filter which DayTasks to update
     */
    where?: DayTaskWhereInput
    /**
     * Limit how many DayTasks to update.
     */
    limit?: number
  }

  /**
   * DayTask updateManyAndReturn
   */
  export type DayTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * The data used to update DayTasks.
     */
    data: XOR<DayTaskUpdateManyMutationInput, DayTaskUncheckedUpdateManyInput>
    /**
     * Filter which DayTasks to update
     */
    where?: DayTaskWhereInput
    /**
     * Limit how many DayTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DayTask upsert
   */
  export type DayTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the DayTask to update in case it exists.
     */
    where: DayTaskWhereUniqueInput
    /**
     * In case the DayTask found by the `where` argument doesn't exist, create a new DayTask with this data.
     */
    create: XOR<DayTaskCreateInput, DayTaskUncheckedCreateInput>
    /**
     * In case the DayTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayTaskUpdateInput, DayTaskUncheckedUpdateInput>
  }

  /**
   * DayTask delete
   */
  export type DayTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
    /**
     * Filter which DayTask to delete.
     */
    where: DayTaskWhereUniqueInput
  }

  /**
   * DayTask deleteMany
   */
  export type DayTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayTasks to delete
     */
    where?: DayTaskWhereInput
    /**
     * Limit how many DayTasks to delete.
     */
    limit?: number
  }

  /**
   * DayTask.buildLog
   */
  export type DayTask$buildLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    where?: BuildLogWhereInput
  }

  /**
   * DayTask without action
   */
  export type DayTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
  }


  /**
   * Model BuildLog
   */

  export type AggregateBuildLog = {
    _count: BuildLogCountAggregateOutputType | null
    _avg: BuildLogAvgAggregateOutputType | null
    _sum: BuildLogSumAggregateOutputType | null
    _min: BuildLogMinAggregateOutputType | null
    _max: BuildLogMaxAggregateOutputType | null
  }

  export type BuildLogAvgAggregateOutputType = {
    dayIndex: number | null
  }

  export type BuildLogSumAggregateOutputType = {
    dayIndex: number | null
  }

  export type BuildLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    logDate: Date | null
    tweet: string | null
    dayIndex: number | null
    summary: string | null
    generatedAt: Date | null
  }

  export type BuildLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    logDate: Date | null
    tweet: string | null
    dayIndex: number | null
    summary: string | null
    generatedAt: Date | null
  }

  export type BuildLogCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    logDate: number
    tweet: number
    dayIndex: number
    summary: number
    generatedAt: number
    _all: number
  }


  export type BuildLogAvgAggregateInputType = {
    dayIndex?: true
  }

  export type BuildLogSumAggregateInputType = {
    dayIndex?: true
  }

  export type BuildLogMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    logDate?: true
    tweet?: true
    dayIndex?: true
    summary?: true
    generatedAt?: true
  }

  export type BuildLogMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    logDate?: true
    tweet?: true
    dayIndex?: true
    summary?: true
    generatedAt?: true
  }

  export type BuildLogCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    logDate?: true
    tweet?: true
    dayIndex?: true
    summary?: true
    generatedAt?: true
    _all?: true
  }

  export type BuildLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuildLog to aggregate.
     */
    where?: BuildLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildLogs to fetch.
     */
    orderBy?: BuildLogOrderByWithRelationInput | BuildLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BuildLogs
    **/
    _count?: true | BuildLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildLogMaxAggregateInputType
  }

  export type GetBuildLogAggregateType<T extends BuildLogAggregateArgs> = {
        [P in keyof T & keyof AggregateBuildLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuildLog[P]>
      : GetScalarType<T[P], AggregateBuildLog[P]>
  }




  export type BuildLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildLogWhereInput
    orderBy?: BuildLogOrderByWithAggregationInput | BuildLogOrderByWithAggregationInput[]
    by: BuildLogScalarFieldEnum[] | BuildLogScalarFieldEnum
    having?: BuildLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildLogCountAggregateInputType | true
    _avg?: BuildLogAvgAggregateInputType
    _sum?: BuildLogSumAggregateInputType
    _min?: BuildLogMinAggregateInputType
    _max?: BuildLogMaxAggregateInputType
  }

  export type BuildLogGroupByOutputType = {
    id: string
    userId: string
    productId: string
    logDate: Date
    tweet: string | null
    dayIndex: number
    summary: string
    generatedAt: Date
    _count: BuildLogCountAggregateOutputType | null
    _avg: BuildLogAvgAggregateOutputType | null
    _sum: BuildLogSumAggregateOutputType | null
    _min: BuildLogMinAggregateOutputType | null
    _max: BuildLogMaxAggregateOutputType | null
  }

  type GetBuildLogGroupByPayload<T extends BuildLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildLogGroupByOutputType[P]>
            : GetScalarType<T[P], BuildLogGroupByOutputType[P]>
        }
      >
    >


  export type BuildLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    logDate?: boolean
    tweet?: boolean
    dayIndex?: boolean
    summary?: boolean
    generatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    DayTask?: boolean | BuildLog$DayTaskArgs<ExtArgs>
    _count?: boolean | BuildLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildLog"]>

  export type BuildLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    logDate?: boolean
    tweet?: boolean
    dayIndex?: boolean
    summary?: boolean
    generatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildLog"]>

  export type BuildLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    logDate?: boolean
    tweet?: boolean
    dayIndex?: boolean
    summary?: boolean
    generatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildLog"]>

  export type BuildLogSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    logDate?: boolean
    tweet?: boolean
    dayIndex?: boolean
    summary?: boolean
    generatedAt?: boolean
  }

  export type BuildLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "logDate" | "tweet" | "dayIndex" | "summary" | "generatedAt", ExtArgs["result"]["buildLog"]>
  export type BuildLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    DayTask?: boolean | BuildLog$DayTaskArgs<ExtArgs>
    _count?: boolean | BuildLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BuildLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type BuildLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $BuildLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BuildLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      DayTask: Prisma.$DayTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      logDate: Date
      tweet: string | null
      dayIndex: number
      summary: string
      generatedAt: Date
    }, ExtArgs["result"]["buildLog"]>
    composites: {}
  }

  type BuildLogGetPayload<S extends boolean | null | undefined | BuildLogDefaultArgs> = $Result.GetResult<Prisma.$BuildLogPayload, S>

  type BuildLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildLogCountAggregateInputType | true
    }

  export interface BuildLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BuildLog'], meta: { name: 'BuildLog' } }
    /**
     * Find zero or one BuildLog that matches the filter.
     * @param {BuildLogFindUniqueArgs} args - Arguments to find a BuildLog
     * @example
     * // Get one BuildLog
     * const buildLog = await prisma.buildLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildLogFindUniqueArgs>(args: SelectSubset<T, BuildLogFindUniqueArgs<ExtArgs>>): Prisma__BuildLogClient<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BuildLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildLogFindUniqueOrThrowArgs} args - Arguments to find a BuildLog
     * @example
     * // Get one BuildLog
     * const buildLog = await prisma.buildLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildLogFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildLogClient<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuildLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildLogFindFirstArgs} args - Arguments to find a BuildLog
     * @example
     * // Get one BuildLog
     * const buildLog = await prisma.buildLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildLogFindFirstArgs>(args?: SelectSubset<T, BuildLogFindFirstArgs<ExtArgs>>): Prisma__BuildLogClient<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuildLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildLogFindFirstOrThrowArgs} args - Arguments to find a BuildLog
     * @example
     * // Get one BuildLog
     * const buildLog = await prisma.buildLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildLogFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildLogClient<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BuildLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BuildLogs
     * const buildLogs = await prisma.buildLog.findMany()
     * 
     * // Get first 10 BuildLogs
     * const buildLogs = await prisma.buildLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildLogWithIdOnly = await prisma.buildLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildLogFindManyArgs>(args?: SelectSubset<T, BuildLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BuildLog.
     * @param {BuildLogCreateArgs} args - Arguments to create a BuildLog.
     * @example
     * // Create one BuildLog
     * const BuildLog = await prisma.buildLog.create({
     *   data: {
     *     // ... data to create a BuildLog
     *   }
     * })
     * 
     */
    create<T extends BuildLogCreateArgs>(args: SelectSubset<T, BuildLogCreateArgs<ExtArgs>>): Prisma__BuildLogClient<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BuildLogs.
     * @param {BuildLogCreateManyArgs} args - Arguments to create many BuildLogs.
     * @example
     * // Create many BuildLogs
     * const buildLog = await prisma.buildLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildLogCreateManyArgs>(args?: SelectSubset<T, BuildLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BuildLogs and returns the data saved in the database.
     * @param {BuildLogCreateManyAndReturnArgs} args - Arguments to create many BuildLogs.
     * @example
     * // Create many BuildLogs
     * const buildLog = await prisma.buildLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BuildLogs and only return the `id`
     * const buildLogWithIdOnly = await prisma.buildLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildLogCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BuildLog.
     * @param {BuildLogDeleteArgs} args - Arguments to delete one BuildLog.
     * @example
     * // Delete one BuildLog
     * const BuildLog = await prisma.buildLog.delete({
     *   where: {
     *     // ... filter to delete one BuildLog
     *   }
     * })
     * 
     */
    delete<T extends BuildLogDeleteArgs>(args: SelectSubset<T, BuildLogDeleteArgs<ExtArgs>>): Prisma__BuildLogClient<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BuildLog.
     * @param {BuildLogUpdateArgs} args - Arguments to update one BuildLog.
     * @example
     * // Update one BuildLog
     * const buildLog = await prisma.buildLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildLogUpdateArgs>(args: SelectSubset<T, BuildLogUpdateArgs<ExtArgs>>): Prisma__BuildLogClient<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BuildLogs.
     * @param {BuildLogDeleteManyArgs} args - Arguments to filter BuildLogs to delete.
     * @example
     * // Delete a few BuildLogs
     * const { count } = await prisma.buildLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildLogDeleteManyArgs>(args?: SelectSubset<T, BuildLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuildLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BuildLogs
     * const buildLog = await prisma.buildLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildLogUpdateManyArgs>(args: SelectSubset<T, BuildLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuildLogs and returns the data updated in the database.
     * @param {BuildLogUpdateManyAndReturnArgs} args - Arguments to update many BuildLogs.
     * @example
     * // Update many BuildLogs
     * const buildLog = await prisma.buildLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BuildLogs and only return the `id`
     * const buildLogWithIdOnly = await prisma.buildLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuildLogUpdateManyAndReturnArgs>(args: SelectSubset<T, BuildLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BuildLog.
     * @param {BuildLogUpsertArgs} args - Arguments to update or create a BuildLog.
     * @example
     * // Update or create a BuildLog
     * const buildLog = await prisma.buildLog.upsert({
     *   create: {
     *     // ... data to create a BuildLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BuildLog we want to update
     *   }
     * })
     */
    upsert<T extends BuildLogUpsertArgs>(args: SelectSubset<T, BuildLogUpsertArgs<ExtArgs>>): Prisma__BuildLogClient<$Result.GetResult<Prisma.$BuildLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BuildLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildLogCountArgs} args - Arguments to filter BuildLogs to count.
     * @example
     * // Count the number of BuildLogs
     * const count = await prisma.buildLog.count({
     *   where: {
     *     // ... the filter for the BuildLogs we want to count
     *   }
     * })
    **/
    count<T extends BuildLogCountArgs>(
      args?: Subset<T, BuildLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BuildLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildLogAggregateArgs>(args: Subset<T, BuildLogAggregateArgs>): Prisma.PrismaPromise<GetBuildLogAggregateType<T>>

    /**
     * Group by BuildLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuildLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildLogGroupByArgs['orderBy'] }
        : { orderBy?: BuildLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuildLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BuildLog model
   */
  readonly fields: BuildLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BuildLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DayTask<T extends BuildLog$DayTaskArgs<ExtArgs> = {}>(args?: Subset<T, BuildLog$DayTaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BuildLog model
   */
  interface BuildLogFieldRefs {
    readonly id: FieldRef<"BuildLog", 'String'>
    readonly userId: FieldRef<"BuildLog", 'String'>
    readonly productId: FieldRef<"BuildLog", 'String'>
    readonly logDate: FieldRef<"BuildLog", 'DateTime'>
    readonly tweet: FieldRef<"BuildLog", 'String'>
    readonly dayIndex: FieldRef<"BuildLog", 'Int'>
    readonly summary: FieldRef<"BuildLog", 'String'>
    readonly generatedAt: FieldRef<"BuildLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BuildLog findUnique
   */
  export type BuildLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    /**
     * Filter, which BuildLog to fetch.
     */
    where: BuildLogWhereUniqueInput
  }

  /**
   * BuildLog findUniqueOrThrow
   */
  export type BuildLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    /**
     * Filter, which BuildLog to fetch.
     */
    where: BuildLogWhereUniqueInput
  }

  /**
   * BuildLog findFirst
   */
  export type BuildLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    /**
     * Filter, which BuildLog to fetch.
     */
    where?: BuildLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildLogs to fetch.
     */
    orderBy?: BuildLogOrderByWithRelationInput | BuildLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuildLogs.
     */
    cursor?: BuildLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuildLogs.
     */
    distinct?: BuildLogScalarFieldEnum | BuildLogScalarFieldEnum[]
  }

  /**
   * BuildLog findFirstOrThrow
   */
  export type BuildLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    /**
     * Filter, which BuildLog to fetch.
     */
    where?: BuildLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildLogs to fetch.
     */
    orderBy?: BuildLogOrderByWithRelationInput | BuildLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuildLogs.
     */
    cursor?: BuildLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuildLogs.
     */
    distinct?: BuildLogScalarFieldEnum | BuildLogScalarFieldEnum[]
  }

  /**
   * BuildLog findMany
   */
  export type BuildLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    /**
     * Filter, which BuildLogs to fetch.
     */
    where?: BuildLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildLogs to fetch.
     */
    orderBy?: BuildLogOrderByWithRelationInput | BuildLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BuildLogs.
     */
    cursor?: BuildLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildLogs.
     */
    skip?: number
    distinct?: BuildLogScalarFieldEnum | BuildLogScalarFieldEnum[]
  }

  /**
   * BuildLog create
   */
  export type BuildLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    /**
     * The data needed to create a BuildLog.
     */
    data: XOR<BuildLogCreateInput, BuildLogUncheckedCreateInput>
  }

  /**
   * BuildLog createMany
   */
  export type BuildLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BuildLogs.
     */
    data: BuildLogCreateManyInput | BuildLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BuildLog createManyAndReturn
   */
  export type BuildLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * The data used to create many BuildLogs.
     */
    data: BuildLogCreateManyInput | BuildLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuildLog update
   */
  export type BuildLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    /**
     * The data needed to update a BuildLog.
     */
    data: XOR<BuildLogUpdateInput, BuildLogUncheckedUpdateInput>
    /**
     * Choose, which BuildLog to update.
     */
    where: BuildLogWhereUniqueInput
  }

  /**
   * BuildLog updateMany
   */
  export type BuildLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BuildLogs.
     */
    data: XOR<BuildLogUpdateManyMutationInput, BuildLogUncheckedUpdateManyInput>
    /**
     * Filter which BuildLogs to update
     */
    where?: BuildLogWhereInput
    /**
     * Limit how many BuildLogs to update.
     */
    limit?: number
  }

  /**
   * BuildLog updateManyAndReturn
   */
  export type BuildLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * The data used to update BuildLogs.
     */
    data: XOR<BuildLogUpdateManyMutationInput, BuildLogUncheckedUpdateManyInput>
    /**
     * Filter which BuildLogs to update
     */
    where?: BuildLogWhereInput
    /**
     * Limit how many BuildLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuildLog upsert
   */
  export type BuildLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    /**
     * The filter to search for the BuildLog to update in case it exists.
     */
    where: BuildLogWhereUniqueInput
    /**
     * In case the BuildLog found by the `where` argument doesn't exist, create a new BuildLog with this data.
     */
    create: XOR<BuildLogCreateInput, BuildLogUncheckedCreateInput>
    /**
     * In case the BuildLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildLogUpdateInput, BuildLogUncheckedUpdateInput>
  }

  /**
   * BuildLog delete
   */
  export type BuildLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
    /**
     * Filter which BuildLog to delete.
     */
    where: BuildLogWhereUniqueInput
  }

  /**
   * BuildLog deleteMany
   */
  export type BuildLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuildLogs to delete
     */
    where?: BuildLogWhereInput
    /**
     * Limit how many BuildLogs to delete.
     */
    limit?: number
  }

  /**
   * BuildLog.DayTask
   */
  export type BuildLog$DayTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayTask
     */
    select?: DayTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayTask
     */
    omit?: DayTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayTaskInclude<ExtArgs> | null
    where?: DayTaskWhereInput
    orderBy?: DayTaskOrderByWithRelationInput | DayTaskOrderByWithRelationInput[]
    cursor?: DayTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayTaskScalarFieldEnum | DayTaskScalarFieldEnum[]
  }

  /**
   * BuildLog without action
   */
  export type BuildLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildLog
     */
    select?: BuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildLog
     */
    omit?: BuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildLogInclude<ExtArgs> | null
  }


  /**
   * Model DailyStreak
   */

  export type AggregateDailyStreak = {
    _count: DailyStreakCountAggregateOutputType | null
    _min: DailyStreakMinAggregateOutputType | null
    _max: DailyStreakMaxAggregateOutputType | null
  }

  export type DailyStreakMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    date: Date | null
    hasBuildLog: boolean | null
    createdAt: Date | null
  }

  export type DailyStreakMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    date: Date | null
    hasBuildLog: boolean | null
    createdAt: Date | null
  }

  export type DailyStreakCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    date: number
    hasBuildLog: number
    createdAt: number
    _all: number
  }


  export type DailyStreakMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    date?: true
    hasBuildLog?: true
    createdAt?: true
  }

  export type DailyStreakMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    date?: true
    hasBuildLog?: true
    createdAt?: true
  }

  export type DailyStreakCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    date?: true
    hasBuildLog?: true
    createdAt?: true
    _all?: true
  }

  export type DailyStreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyStreak to aggregate.
     */
    where?: DailyStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStreaks to fetch.
     */
    orderBy?: DailyStreakOrderByWithRelationInput | DailyStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyStreaks
    **/
    _count?: true | DailyStreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyStreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyStreakMaxAggregateInputType
  }

  export type GetDailyStreakAggregateType<T extends DailyStreakAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyStreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyStreak[P]>
      : GetScalarType<T[P], AggregateDailyStreak[P]>
  }




  export type DailyStreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyStreakWhereInput
    orderBy?: DailyStreakOrderByWithAggregationInput | DailyStreakOrderByWithAggregationInput[]
    by: DailyStreakScalarFieldEnum[] | DailyStreakScalarFieldEnum
    having?: DailyStreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyStreakCountAggregateInputType | true
    _min?: DailyStreakMinAggregateInputType
    _max?: DailyStreakMaxAggregateInputType
  }

  export type DailyStreakGroupByOutputType = {
    id: string
    userId: string
    productId: string
    date: Date
    hasBuildLog: boolean
    createdAt: Date
    _count: DailyStreakCountAggregateOutputType | null
    _min: DailyStreakMinAggregateOutputType | null
    _max: DailyStreakMaxAggregateOutputType | null
  }

  type GetDailyStreakGroupByPayload<T extends DailyStreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyStreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyStreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyStreakGroupByOutputType[P]>
            : GetScalarType<T[P], DailyStreakGroupByOutputType[P]>
        }
      >
    >


  export type DailyStreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    date?: boolean
    hasBuildLog?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyStreak"]>

  export type DailyStreakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    date?: boolean
    hasBuildLog?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyStreak"]>

  export type DailyStreakSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    date?: boolean
    hasBuildLog?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyStreak"]>

  export type DailyStreakSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    date?: boolean
    hasBuildLog?: boolean
    createdAt?: boolean
  }

  export type DailyStreakOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "date" | "hasBuildLog" | "createdAt", ExtArgs["result"]["dailyStreak"]>
  export type DailyStreakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DailyStreakIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DailyStreakIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $DailyStreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyStreak"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      date: Date
      hasBuildLog: boolean
      createdAt: Date
    }, ExtArgs["result"]["dailyStreak"]>
    composites: {}
  }

  type DailyStreakGetPayload<S extends boolean | null | undefined | DailyStreakDefaultArgs> = $Result.GetResult<Prisma.$DailyStreakPayload, S>

  type DailyStreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyStreakFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyStreakCountAggregateInputType | true
    }

  export interface DailyStreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyStreak'], meta: { name: 'DailyStreak' } }
    /**
     * Find zero or one DailyStreak that matches the filter.
     * @param {DailyStreakFindUniqueArgs} args - Arguments to find a DailyStreak
     * @example
     * // Get one DailyStreak
     * const dailyStreak = await prisma.dailyStreak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyStreakFindUniqueArgs>(args: SelectSubset<T, DailyStreakFindUniqueArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyStreak that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyStreakFindUniqueOrThrowArgs} args - Arguments to find a DailyStreak
     * @example
     * // Get one DailyStreak
     * const dailyStreak = await prisma.dailyStreak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyStreakFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyStreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyStreak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakFindFirstArgs} args - Arguments to find a DailyStreak
     * @example
     * // Get one DailyStreak
     * const dailyStreak = await prisma.dailyStreak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyStreakFindFirstArgs>(args?: SelectSubset<T, DailyStreakFindFirstArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyStreak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakFindFirstOrThrowArgs} args - Arguments to find a DailyStreak
     * @example
     * // Get one DailyStreak
     * const dailyStreak = await prisma.dailyStreak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyStreakFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyStreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyStreaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyStreaks
     * const dailyStreaks = await prisma.dailyStreak.findMany()
     * 
     * // Get first 10 DailyStreaks
     * const dailyStreaks = await prisma.dailyStreak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyStreakWithIdOnly = await prisma.dailyStreak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyStreakFindManyArgs>(args?: SelectSubset<T, DailyStreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyStreak.
     * @param {DailyStreakCreateArgs} args - Arguments to create a DailyStreak.
     * @example
     * // Create one DailyStreak
     * const DailyStreak = await prisma.dailyStreak.create({
     *   data: {
     *     // ... data to create a DailyStreak
     *   }
     * })
     * 
     */
    create<T extends DailyStreakCreateArgs>(args: SelectSubset<T, DailyStreakCreateArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyStreaks.
     * @param {DailyStreakCreateManyArgs} args - Arguments to create many DailyStreaks.
     * @example
     * // Create many DailyStreaks
     * const dailyStreak = await prisma.dailyStreak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyStreakCreateManyArgs>(args?: SelectSubset<T, DailyStreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyStreaks and returns the data saved in the database.
     * @param {DailyStreakCreateManyAndReturnArgs} args - Arguments to create many DailyStreaks.
     * @example
     * // Create many DailyStreaks
     * const dailyStreak = await prisma.dailyStreak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyStreaks and only return the `id`
     * const dailyStreakWithIdOnly = await prisma.dailyStreak.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyStreakCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyStreakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyStreak.
     * @param {DailyStreakDeleteArgs} args - Arguments to delete one DailyStreak.
     * @example
     * // Delete one DailyStreak
     * const DailyStreak = await prisma.dailyStreak.delete({
     *   where: {
     *     // ... filter to delete one DailyStreak
     *   }
     * })
     * 
     */
    delete<T extends DailyStreakDeleteArgs>(args: SelectSubset<T, DailyStreakDeleteArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyStreak.
     * @param {DailyStreakUpdateArgs} args - Arguments to update one DailyStreak.
     * @example
     * // Update one DailyStreak
     * const dailyStreak = await prisma.dailyStreak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyStreakUpdateArgs>(args: SelectSubset<T, DailyStreakUpdateArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyStreaks.
     * @param {DailyStreakDeleteManyArgs} args - Arguments to filter DailyStreaks to delete.
     * @example
     * // Delete a few DailyStreaks
     * const { count } = await prisma.dailyStreak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyStreakDeleteManyArgs>(args?: SelectSubset<T, DailyStreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyStreaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyStreaks
     * const dailyStreak = await prisma.dailyStreak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyStreakUpdateManyArgs>(args: SelectSubset<T, DailyStreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyStreaks and returns the data updated in the database.
     * @param {DailyStreakUpdateManyAndReturnArgs} args - Arguments to update many DailyStreaks.
     * @example
     * // Update many DailyStreaks
     * const dailyStreak = await prisma.dailyStreak.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyStreaks and only return the `id`
     * const dailyStreakWithIdOnly = await prisma.dailyStreak.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyStreakUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyStreakUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyStreak.
     * @param {DailyStreakUpsertArgs} args - Arguments to update or create a DailyStreak.
     * @example
     * // Update or create a DailyStreak
     * const dailyStreak = await prisma.dailyStreak.upsert({
     *   create: {
     *     // ... data to create a DailyStreak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyStreak we want to update
     *   }
     * })
     */
    upsert<T extends DailyStreakUpsertArgs>(args: SelectSubset<T, DailyStreakUpsertArgs<ExtArgs>>): Prisma__DailyStreakClient<$Result.GetResult<Prisma.$DailyStreakPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyStreaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakCountArgs} args - Arguments to filter DailyStreaks to count.
     * @example
     * // Count the number of DailyStreaks
     * const count = await prisma.dailyStreak.count({
     *   where: {
     *     // ... the filter for the DailyStreaks we want to count
     *   }
     * })
    **/
    count<T extends DailyStreakCountArgs>(
      args?: Subset<T, DailyStreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyStreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyStreak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyStreakAggregateArgs>(args: Subset<T, DailyStreakAggregateArgs>): Prisma.PrismaPromise<GetDailyStreakAggregateType<T>>

    /**
     * Group by DailyStreak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStreakGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyStreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyStreakGroupByArgs['orderBy'] }
        : { orderBy?: DailyStreakGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyStreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyStreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyStreak model
   */
  readonly fields: DailyStreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyStreak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyStreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyStreak model
   */
  interface DailyStreakFieldRefs {
    readonly id: FieldRef<"DailyStreak", 'String'>
    readonly userId: FieldRef<"DailyStreak", 'String'>
    readonly productId: FieldRef<"DailyStreak", 'String'>
    readonly date: FieldRef<"DailyStreak", 'DateTime'>
    readonly hasBuildLog: FieldRef<"DailyStreak", 'Boolean'>
    readonly createdAt: FieldRef<"DailyStreak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyStreak findUnique
   */
  export type DailyStreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter, which DailyStreak to fetch.
     */
    where: DailyStreakWhereUniqueInput
  }

  /**
   * DailyStreak findUniqueOrThrow
   */
  export type DailyStreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter, which DailyStreak to fetch.
     */
    where: DailyStreakWhereUniqueInput
  }

  /**
   * DailyStreak findFirst
   */
  export type DailyStreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter, which DailyStreak to fetch.
     */
    where?: DailyStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStreaks to fetch.
     */
    orderBy?: DailyStreakOrderByWithRelationInput | DailyStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyStreaks.
     */
    cursor?: DailyStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyStreaks.
     */
    distinct?: DailyStreakScalarFieldEnum | DailyStreakScalarFieldEnum[]
  }

  /**
   * DailyStreak findFirstOrThrow
   */
  export type DailyStreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter, which DailyStreak to fetch.
     */
    where?: DailyStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStreaks to fetch.
     */
    orderBy?: DailyStreakOrderByWithRelationInput | DailyStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyStreaks.
     */
    cursor?: DailyStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyStreaks.
     */
    distinct?: DailyStreakScalarFieldEnum | DailyStreakScalarFieldEnum[]
  }

  /**
   * DailyStreak findMany
   */
  export type DailyStreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter, which DailyStreaks to fetch.
     */
    where?: DailyStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStreaks to fetch.
     */
    orderBy?: DailyStreakOrderByWithRelationInput | DailyStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyStreaks.
     */
    cursor?: DailyStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStreaks.
     */
    skip?: number
    distinct?: DailyStreakScalarFieldEnum | DailyStreakScalarFieldEnum[]
  }

  /**
   * DailyStreak create
   */
  export type DailyStreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyStreak.
     */
    data: XOR<DailyStreakCreateInput, DailyStreakUncheckedCreateInput>
  }

  /**
   * DailyStreak createMany
   */
  export type DailyStreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyStreaks.
     */
    data: DailyStreakCreateManyInput | DailyStreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyStreak createManyAndReturn
   */
  export type DailyStreakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * The data used to create many DailyStreaks.
     */
    data: DailyStreakCreateManyInput | DailyStreakCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyStreak update
   */
  export type DailyStreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyStreak.
     */
    data: XOR<DailyStreakUpdateInput, DailyStreakUncheckedUpdateInput>
    /**
     * Choose, which DailyStreak to update.
     */
    where: DailyStreakWhereUniqueInput
  }

  /**
   * DailyStreak updateMany
   */
  export type DailyStreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyStreaks.
     */
    data: XOR<DailyStreakUpdateManyMutationInput, DailyStreakUncheckedUpdateManyInput>
    /**
     * Filter which DailyStreaks to update
     */
    where?: DailyStreakWhereInput
    /**
     * Limit how many DailyStreaks to update.
     */
    limit?: number
  }

  /**
   * DailyStreak updateManyAndReturn
   */
  export type DailyStreakUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * The data used to update DailyStreaks.
     */
    data: XOR<DailyStreakUpdateManyMutationInput, DailyStreakUncheckedUpdateManyInput>
    /**
     * Filter which DailyStreaks to update
     */
    where?: DailyStreakWhereInput
    /**
     * Limit how many DailyStreaks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyStreak upsert
   */
  export type DailyStreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyStreak to update in case it exists.
     */
    where: DailyStreakWhereUniqueInput
    /**
     * In case the DailyStreak found by the `where` argument doesn't exist, create a new DailyStreak with this data.
     */
    create: XOR<DailyStreakCreateInput, DailyStreakUncheckedCreateInput>
    /**
     * In case the DailyStreak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyStreakUpdateInput, DailyStreakUncheckedUpdateInput>
  }

  /**
   * DailyStreak delete
   */
  export type DailyStreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
    /**
     * Filter which DailyStreak to delete.
     */
    where: DailyStreakWhereUniqueInput
  }

  /**
   * DailyStreak deleteMany
   */
  export type DailyStreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyStreaks to delete
     */
    where?: DailyStreakWhereInput
    /**
     * Limit how many DailyStreaks to delete.
     */
    limit?: number
  }

  /**
   * DailyStreak without action
   */
  export type DailyStreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStreak
     */
    select?: DailyStreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStreak
     */
    omit?: DailyStreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStreakInclude<ExtArgs> | null
  }


  /**
   * Model AiLog
   */

  export type AggregateAiLog = {
    _count: AiLogCountAggregateOutputType | null
    _min: AiLogMinAggregateOutputType | null
    _max: AiLogMaxAggregateOutputType | null
  }

  export type AiLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    ai_model: string | null
    type: string | null
    createdAt: Date | null
  }

  export type AiLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    ai_model: string | null
    type: string | null
    createdAt: Date | null
  }

  export type AiLogCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    ai_model: number
    type: number
    input: number
    output: number
    createdAt: number
    _all: number
  }


  export type AiLogMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    ai_model?: true
    type?: true
    createdAt?: true
  }

  export type AiLogMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    ai_model?: true
    type?: true
    createdAt?: true
  }

  export type AiLogCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    ai_model?: true
    type?: true
    input?: true
    output?: true
    createdAt?: true
    _all?: true
  }

  export type AiLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiLog to aggregate.
     */
    where?: AiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiLogs to fetch.
     */
    orderBy?: AiLogOrderByWithRelationInput | AiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiLogs
    **/
    _count?: true | AiLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiLogMaxAggregateInputType
  }

  export type GetAiLogAggregateType<T extends AiLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAiLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiLog[P]>
      : GetScalarType<T[P], AggregateAiLog[P]>
  }




  export type AiLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiLogWhereInput
    orderBy?: AiLogOrderByWithAggregationInput | AiLogOrderByWithAggregationInput[]
    by: AiLogScalarFieldEnum[] | AiLogScalarFieldEnum
    having?: AiLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiLogCountAggregateInputType | true
    _min?: AiLogMinAggregateInputType
    _max?: AiLogMaxAggregateInputType
  }

  export type AiLogGroupByOutputType = {
    id: string
    userId: string
    productId: string
    ai_model: string
    type: string
    input: JsonValue
    output: JsonValue
    createdAt: Date
    _count: AiLogCountAggregateOutputType | null
    _min: AiLogMinAggregateOutputType | null
    _max: AiLogMaxAggregateOutputType | null
  }

  type GetAiLogGroupByPayload<T extends AiLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiLogGroupByOutputType[P]>
            : GetScalarType<T[P], AiLogGroupByOutputType[P]>
        }
      >
    >


  export type AiLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    ai_model?: boolean
    type?: boolean
    input?: boolean
    output?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiLog"]>

  export type AiLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    ai_model?: boolean
    type?: boolean
    input?: boolean
    output?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiLog"]>

  export type AiLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    ai_model?: boolean
    type?: boolean
    input?: boolean
    output?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiLog"]>

  export type AiLogSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    ai_model?: boolean
    type?: boolean
    input?: boolean
    output?: boolean
    createdAt?: boolean
  }

  export type AiLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "ai_model" | "type" | "input" | "output" | "createdAt", ExtArgs["result"]["aiLog"]>
  export type AiLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type AiLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type AiLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $AiLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      ai_model: string
      type: string
      input: Prisma.JsonValue
      output: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["aiLog"]>
    composites: {}
  }

  type AiLogGetPayload<S extends boolean | null | undefined | AiLogDefaultArgs> = $Result.GetResult<Prisma.$AiLogPayload, S>

  type AiLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiLogCountAggregateInputType | true
    }

  export interface AiLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiLog'], meta: { name: 'AiLog' } }
    /**
     * Find zero or one AiLog that matches the filter.
     * @param {AiLogFindUniqueArgs} args - Arguments to find a AiLog
     * @example
     * // Get one AiLog
     * const aiLog = await prisma.aiLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiLogFindUniqueArgs>(args: SelectSubset<T, AiLogFindUniqueArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiLogFindUniqueOrThrowArgs} args - Arguments to find a AiLog
     * @example
     * // Get one AiLog
     * const aiLog = await prisma.aiLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AiLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogFindFirstArgs} args - Arguments to find a AiLog
     * @example
     * // Get one AiLog
     * const aiLog = await prisma.aiLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiLogFindFirstArgs>(args?: SelectSubset<T, AiLogFindFirstArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogFindFirstOrThrowArgs} args - Arguments to find a AiLog
     * @example
     * // Get one AiLog
     * const aiLog = await prisma.aiLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AiLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiLogs
     * const aiLogs = await prisma.aiLog.findMany()
     * 
     * // Get first 10 AiLogs
     * const aiLogs = await prisma.aiLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiLogWithIdOnly = await prisma.aiLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiLogFindManyArgs>(args?: SelectSubset<T, AiLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiLog.
     * @param {AiLogCreateArgs} args - Arguments to create a AiLog.
     * @example
     * // Create one AiLog
     * const AiLog = await prisma.aiLog.create({
     *   data: {
     *     // ... data to create a AiLog
     *   }
     * })
     * 
     */
    create<T extends AiLogCreateArgs>(args: SelectSubset<T, AiLogCreateArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiLogs.
     * @param {AiLogCreateManyArgs} args - Arguments to create many AiLogs.
     * @example
     * // Create many AiLogs
     * const aiLog = await prisma.aiLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiLogCreateManyArgs>(args?: SelectSubset<T, AiLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiLogs and returns the data saved in the database.
     * @param {AiLogCreateManyAndReturnArgs} args - Arguments to create many AiLogs.
     * @example
     * // Create many AiLogs
     * const aiLog = await prisma.aiLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiLogs and only return the `id`
     * const aiLogWithIdOnly = await prisma.aiLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AiLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiLog.
     * @param {AiLogDeleteArgs} args - Arguments to delete one AiLog.
     * @example
     * // Delete one AiLog
     * const AiLog = await prisma.aiLog.delete({
     *   where: {
     *     // ... filter to delete one AiLog
     *   }
     * })
     * 
     */
    delete<T extends AiLogDeleteArgs>(args: SelectSubset<T, AiLogDeleteArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiLog.
     * @param {AiLogUpdateArgs} args - Arguments to update one AiLog.
     * @example
     * // Update one AiLog
     * const aiLog = await prisma.aiLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiLogUpdateArgs>(args: SelectSubset<T, AiLogUpdateArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiLogs.
     * @param {AiLogDeleteManyArgs} args - Arguments to filter AiLogs to delete.
     * @example
     * // Delete a few AiLogs
     * const { count } = await prisma.aiLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiLogDeleteManyArgs>(args?: SelectSubset<T, AiLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiLogs
     * const aiLog = await prisma.aiLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiLogUpdateManyArgs>(args: SelectSubset<T, AiLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiLogs and returns the data updated in the database.
     * @param {AiLogUpdateManyAndReturnArgs} args - Arguments to update many AiLogs.
     * @example
     * // Update many AiLogs
     * const aiLog = await prisma.aiLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiLogs and only return the `id`
     * const aiLogWithIdOnly = await prisma.aiLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AiLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiLog.
     * @param {AiLogUpsertArgs} args - Arguments to update or create a AiLog.
     * @example
     * // Update or create a AiLog
     * const aiLog = await prisma.aiLog.upsert({
     *   create: {
     *     // ... data to create a AiLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiLog we want to update
     *   }
     * })
     */
    upsert<T extends AiLogUpsertArgs>(args: SelectSubset<T, AiLogUpsertArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogCountArgs} args - Arguments to filter AiLogs to count.
     * @example
     * // Count the number of AiLogs
     * const count = await prisma.aiLog.count({
     *   where: {
     *     // ... the filter for the AiLogs we want to count
     *   }
     * })
    **/
    count<T extends AiLogCountArgs>(
      args?: Subset<T, AiLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiLogAggregateArgs>(args: Subset<T, AiLogAggregateArgs>): Prisma.PrismaPromise<GetAiLogAggregateType<T>>

    /**
     * Group by AiLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiLogGroupByArgs['orderBy'] }
        : { orderBy?: AiLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiLog model
   */
  readonly fields: AiLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiLog model
   */
  interface AiLogFieldRefs {
    readonly id: FieldRef<"AiLog", 'String'>
    readonly userId: FieldRef<"AiLog", 'String'>
    readonly productId: FieldRef<"AiLog", 'String'>
    readonly ai_model: FieldRef<"AiLog", 'String'>
    readonly type: FieldRef<"AiLog", 'String'>
    readonly input: FieldRef<"AiLog", 'Json'>
    readonly output: FieldRef<"AiLog", 'Json'>
    readonly createdAt: FieldRef<"AiLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiLog findUnique
   */
  export type AiLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
    /**
     * Filter, which AiLog to fetch.
     */
    where: AiLogWhereUniqueInput
  }

  /**
   * AiLog findUniqueOrThrow
   */
  export type AiLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
    /**
     * Filter, which AiLog to fetch.
     */
    where: AiLogWhereUniqueInput
  }

  /**
   * AiLog findFirst
   */
  export type AiLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
    /**
     * Filter, which AiLog to fetch.
     */
    where?: AiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiLogs to fetch.
     */
    orderBy?: AiLogOrderByWithRelationInput | AiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiLogs.
     */
    cursor?: AiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiLogs.
     */
    distinct?: AiLogScalarFieldEnum | AiLogScalarFieldEnum[]
  }

  /**
   * AiLog findFirstOrThrow
   */
  export type AiLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
    /**
     * Filter, which AiLog to fetch.
     */
    where?: AiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiLogs to fetch.
     */
    orderBy?: AiLogOrderByWithRelationInput | AiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiLogs.
     */
    cursor?: AiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiLogs.
     */
    distinct?: AiLogScalarFieldEnum | AiLogScalarFieldEnum[]
  }

  /**
   * AiLog findMany
   */
  export type AiLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
    /**
     * Filter, which AiLogs to fetch.
     */
    where?: AiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiLogs to fetch.
     */
    orderBy?: AiLogOrderByWithRelationInput | AiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiLogs.
     */
    cursor?: AiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiLogs.
     */
    skip?: number
    distinct?: AiLogScalarFieldEnum | AiLogScalarFieldEnum[]
  }

  /**
   * AiLog create
   */
  export type AiLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AiLog.
     */
    data: XOR<AiLogCreateInput, AiLogUncheckedCreateInput>
  }

  /**
   * AiLog createMany
   */
  export type AiLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiLogs.
     */
    data: AiLogCreateManyInput | AiLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiLog createManyAndReturn
   */
  export type AiLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * The data used to create many AiLogs.
     */
    data: AiLogCreateManyInput | AiLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiLog update
   */
  export type AiLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AiLog.
     */
    data: XOR<AiLogUpdateInput, AiLogUncheckedUpdateInput>
    /**
     * Choose, which AiLog to update.
     */
    where: AiLogWhereUniqueInput
  }

  /**
   * AiLog updateMany
   */
  export type AiLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiLogs.
     */
    data: XOR<AiLogUpdateManyMutationInput, AiLogUncheckedUpdateManyInput>
    /**
     * Filter which AiLogs to update
     */
    where?: AiLogWhereInput
    /**
     * Limit how many AiLogs to update.
     */
    limit?: number
  }

  /**
   * AiLog updateManyAndReturn
   */
  export type AiLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * The data used to update AiLogs.
     */
    data: XOR<AiLogUpdateManyMutationInput, AiLogUncheckedUpdateManyInput>
    /**
     * Filter which AiLogs to update
     */
    where?: AiLogWhereInput
    /**
     * Limit how many AiLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiLog upsert
   */
  export type AiLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AiLog to update in case it exists.
     */
    where: AiLogWhereUniqueInput
    /**
     * In case the AiLog found by the `where` argument doesn't exist, create a new AiLog with this data.
     */
    create: XOR<AiLogCreateInput, AiLogUncheckedCreateInput>
    /**
     * In case the AiLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiLogUpdateInput, AiLogUncheckedUpdateInput>
  }

  /**
   * AiLog delete
   */
  export type AiLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
    /**
     * Filter which AiLog to delete.
     */
    where: AiLogWhereUniqueInput
  }

  /**
   * AiLog deleteMany
   */
  export type AiLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiLogs to delete
     */
    where?: AiLogWhereInput
    /**
     * Limit how many AiLogs to delete.
     */
    limit?: number
  }

  /**
   * AiLog without action
   */
  export type AiLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiLogInclude<ExtArgs> | null
  }


  /**
   * Model TokenUsage
   */

  export type AggregateTokenUsage = {
    _count: TokenUsageCountAggregateOutputType | null
    _avg: TokenUsageAvgAggregateOutputType | null
    _sum: TokenUsageSumAggregateOutputType | null
    _min: TokenUsageMinAggregateOutputType | null
    _max: TokenUsageMaxAggregateOutputType | null
  }

  export type TokenUsageAvgAggregateOutputType = {
    tokens: number | null
  }

  export type TokenUsageSumAggregateOutputType = {
    tokens: number | null
  }

  export type TokenUsageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    purpose: string | null
    tokens: number | null
    createdAt: Date | null
  }

  export type TokenUsageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    purpose: string | null
    tokens: number | null
    createdAt: Date | null
  }

  export type TokenUsageCountAggregateOutputType = {
    id: number
    userId: number
    purpose: number
    tokens: number
    createdAt: number
    _all: number
  }


  export type TokenUsageAvgAggregateInputType = {
    tokens?: true
  }

  export type TokenUsageSumAggregateInputType = {
    tokens?: true
  }

  export type TokenUsageMinAggregateInputType = {
    id?: true
    userId?: true
    purpose?: true
    tokens?: true
    createdAt?: true
  }

  export type TokenUsageMaxAggregateInputType = {
    id?: true
    userId?: true
    purpose?: true
    tokens?: true
    createdAt?: true
  }

  export type TokenUsageCountAggregateInputType = {
    id?: true
    userId?: true
    purpose?: true
    tokens?: true
    createdAt?: true
    _all?: true
  }

  export type TokenUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenUsage to aggregate.
     */
    where?: TokenUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenUsages to fetch.
     */
    orderBy?: TokenUsageOrderByWithRelationInput | TokenUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenUsages
    **/
    _count?: true | TokenUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenUsageMaxAggregateInputType
  }

  export type GetTokenUsageAggregateType<T extends TokenUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenUsage[P]>
      : GetScalarType<T[P], AggregateTokenUsage[P]>
  }




  export type TokenUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenUsageWhereInput
    orderBy?: TokenUsageOrderByWithAggregationInput | TokenUsageOrderByWithAggregationInput[]
    by: TokenUsageScalarFieldEnum[] | TokenUsageScalarFieldEnum
    having?: TokenUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenUsageCountAggregateInputType | true
    _avg?: TokenUsageAvgAggregateInputType
    _sum?: TokenUsageSumAggregateInputType
    _min?: TokenUsageMinAggregateInputType
    _max?: TokenUsageMaxAggregateInputType
  }

  export type TokenUsageGroupByOutputType = {
    id: string
    userId: string
    purpose: string
    tokens: number
    createdAt: Date
    _count: TokenUsageCountAggregateOutputType | null
    _avg: TokenUsageAvgAggregateOutputType | null
    _sum: TokenUsageSumAggregateOutputType | null
    _min: TokenUsageMinAggregateOutputType | null
    _max: TokenUsageMaxAggregateOutputType | null
  }

  type GetTokenUsageGroupByPayload<T extends TokenUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenUsageGroupByOutputType[P]>
            : GetScalarType<T[P], TokenUsageGroupByOutputType[P]>
        }
      >
    >


  export type TokenUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    purpose?: boolean
    tokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenUsage"]>

  export type TokenUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    purpose?: boolean
    tokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenUsage"]>

  export type TokenUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    purpose?: boolean
    tokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenUsage"]>

  export type TokenUsageSelectScalar = {
    id?: boolean
    userId?: boolean
    purpose?: boolean
    tokens?: boolean
    createdAt?: boolean
  }

  export type TokenUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "purpose" | "tokens" | "createdAt", ExtArgs["result"]["tokenUsage"]>
  export type TokenUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenUsage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      purpose: string
      tokens: number
      createdAt: Date
    }, ExtArgs["result"]["tokenUsage"]>
    composites: {}
  }

  type TokenUsageGetPayload<S extends boolean | null | undefined | TokenUsageDefaultArgs> = $Result.GetResult<Prisma.$TokenUsagePayload, S>

  type TokenUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenUsageCountAggregateInputType | true
    }

  export interface TokenUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenUsage'], meta: { name: 'TokenUsage' } }
    /**
     * Find zero or one TokenUsage that matches the filter.
     * @param {TokenUsageFindUniqueArgs} args - Arguments to find a TokenUsage
     * @example
     * // Get one TokenUsage
     * const tokenUsage = await prisma.tokenUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenUsageFindUniqueArgs>(args: SelectSubset<T, TokenUsageFindUniqueArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenUsageFindUniqueOrThrowArgs} args - Arguments to find a TokenUsage
     * @example
     * // Get one TokenUsage
     * const tokenUsage = await prisma.tokenUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageFindFirstArgs} args - Arguments to find a TokenUsage
     * @example
     * // Get one TokenUsage
     * const tokenUsage = await prisma.tokenUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenUsageFindFirstArgs>(args?: SelectSubset<T, TokenUsageFindFirstArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageFindFirstOrThrowArgs} args - Arguments to find a TokenUsage
     * @example
     * // Get one TokenUsage
     * const tokenUsage = await prisma.tokenUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenUsages
     * const tokenUsages = await prisma.tokenUsage.findMany()
     * 
     * // Get first 10 TokenUsages
     * const tokenUsages = await prisma.tokenUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenUsageWithIdOnly = await prisma.tokenUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenUsageFindManyArgs>(args?: SelectSubset<T, TokenUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenUsage.
     * @param {TokenUsageCreateArgs} args - Arguments to create a TokenUsage.
     * @example
     * // Create one TokenUsage
     * const TokenUsage = await prisma.tokenUsage.create({
     *   data: {
     *     // ... data to create a TokenUsage
     *   }
     * })
     * 
     */
    create<T extends TokenUsageCreateArgs>(args: SelectSubset<T, TokenUsageCreateArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenUsages.
     * @param {TokenUsageCreateManyArgs} args - Arguments to create many TokenUsages.
     * @example
     * // Create many TokenUsages
     * const tokenUsage = await prisma.tokenUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenUsageCreateManyArgs>(args?: SelectSubset<T, TokenUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenUsages and returns the data saved in the database.
     * @param {TokenUsageCreateManyAndReturnArgs} args - Arguments to create many TokenUsages.
     * @example
     * // Create many TokenUsages
     * const tokenUsage = await prisma.tokenUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenUsages and only return the `id`
     * const tokenUsageWithIdOnly = await prisma.tokenUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenUsage.
     * @param {TokenUsageDeleteArgs} args - Arguments to delete one TokenUsage.
     * @example
     * // Delete one TokenUsage
     * const TokenUsage = await prisma.tokenUsage.delete({
     *   where: {
     *     // ... filter to delete one TokenUsage
     *   }
     * })
     * 
     */
    delete<T extends TokenUsageDeleteArgs>(args: SelectSubset<T, TokenUsageDeleteArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenUsage.
     * @param {TokenUsageUpdateArgs} args - Arguments to update one TokenUsage.
     * @example
     * // Update one TokenUsage
     * const tokenUsage = await prisma.tokenUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUsageUpdateArgs>(args: SelectSubset<T, TokenUsageUpdateArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenUsages.
     * @param {TokenUsageDeleteManyArgs} args - Arguments to filter TokenUsages to delete.
     * @example
     * // Delete a few TokenUsages
     * const { count } = await prisma.tokenUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenUsageDeleteManyArgs>(args?: SelectSubset<T, TokenUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenUsages
     * const tokenUsage = await prisma.tokenUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUsageUpdateManyArgs>(args: SelectSubset<T, TokenUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenUsages and returns the data updated in the database.
     * @param {TokenUsageUpdateManyAndReturnArgs} args - Arguments to update many TokenUsages.
     * @example
     * // Update many TokenUsages
     * const tokenUsage = await prisma.tokenUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenUsages and only return the `id`
     * const tokenUsageWithIdOnly = await prisma.tokenUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenUsage.
     * @param {TokenUsageUpsertArgs} args - Arguments to update or create a TokenUsage.
     * @example
     * // Update or create a TokenUsage
     * const tokenUsage = await prisma.tokenUsage.upsert({
     *   create: {
     *     // ... data to create a TokenUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenUsage we want to update
     *   }
     * })
     */
    upsert<T extends TokenUsageUpsertArgs>(args: SelectSubset<T, TokenUsageUpsertArgs<ExtArgs>>): Prisma__TokenUsageClient<$Result.GetResult<Prisma.$TokenUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageCountArgs} args - Arguments to filter TokenUsages to count.
     * @example
     * // Count the number of TokenUsages
     * const count = await prisma.tokenUsage.count({
     *   where: {
     *     // ... the filter for the TokenUsages we want to count
     *   }
     * })
    **/
    count<T extends TokenUsageCountArgs>(
      args?: Subset<T, TokenUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenUsageAggregateArgs>(args: Subset<T, TokenUsageAggregateArgs>): Prisma.PrismaPromise<GetTokenUsageAggregateType<T>>

    /**
     * Group by TokenUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenUsageGroupByArgs['orderBy'] }
        : { orderBy?: TokenUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenUsage model
   */
  readonly fields: TokenUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenUsage model
   */
  interface TokenUsageFieldRefs {
    readonly id: FieldRef<"TokenUsage", 'String'>
    readonly userId: FieldRef<"TokenUsage", 'String'>
    readonly purpose: FieldRef<"TokenUsage", 'String'>
    readonly tokens: FieldRef<"TokenUsage", 'Int'>
    readonly createdAt: FieldRef<"TokenUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenUsage findUnique
   */
  export type TokenUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter, which TokenUsage to fetch.
     */
    where: TokenUsageWhereUniqueInput
  }

  /**
   * TokenUsage findUniqueOrThrow
   */
  export type TokenUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter, which TokenUsage to fetch.
     */
    where: TokenUsageWhereUniqueInput
  }

  /**
   * TokenUsage findFirst
   */
  export type TokenUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter, which TokenUsage to fetch.
     */
    where?: TokenUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenUsages to fetch.
     */
    orderBy?: TokenUsageOrderByWithRelationInput | TokenUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenUsages.
     */
    cursor?: TokenUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenUsages.
     */
    distinct?: TokenUsageScalarFieldEnum | TokenUsageScalarFieldEnum[]
  }

  /**
   * TokenUsage findFirstOrThrow
   */
  export type TokenUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter, which TokenUsage to fetch.
     */
    where?: TokenUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenUsages to fetch.
     */
    orderBy?: TokenUsageOrderByWithRelationInput | TokenUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenUsages.
     */
    cursor?: TokenUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenUsages.
     */
    distinct?: TokenUsageScalarFieldEnum | TokenUsageScalarFieldEnum[]
  }

  /**
   * TokenUsage findMany
   */
  export type TokenUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter, which TokenUsages to fetch.
     */
    where?: TokenUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenUsages to fetch.
     */
    orderBy?: TokenUsageOrderByWithRelationInput | TokenUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenUsages.
     */
    cursor?: TokenUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenUsages.
     */
    skip?: number
    distinct?: TokenUsageScalarFieldEnum | TokenUsageScalarFieldEnum[]
  }

  /**
   * TokenUsage create
   */
  export type TokenUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenUsage.
     */
    data: XOR<TokenUsageCreateInput, TokenUsageUncheckedCreateInput>
  }

  /**
   * TokenUsage createMany
   */
  export type TokenUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenUsages.
     */
    data: TokenUsageCreateManyInput | TokenUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenUsage createManyAndReturn
   */
  export type TokenUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * The data used to create many TokenUsages.
     */
    data: TokenUsageCreateManyInput | TokenUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenUsage update
   */
  export type TokenUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenUsage.
     */
    data: XOR<TokenUsageUpdateInput, TokenUsageUncheckedUpdateInput>
    /**
     * Choose, which TokenUsage to update.
     */
    where: TokenUsageWhereUniqueInput
  }

  /**
   * TokenUsage updateMany
   */
  export type TokenUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenUsages.
     */
    data: XOR<TokenUsageUpdateManyMutationInput, TokenUsageUncheckedUpdateManyInput>
    /**
     * Filter which TokenUsages to update
     */
    where?: TokenUsageWhereInput
    /**
     * Limit how many TokenUsages to update.
     */
    limit?: number
  }

  /**
   * TokenUsage updateManyAndReturn
   */
  export type TokenUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * The data used to update TokenUsages.
     */
    data: XOR<TokenUsageUpdateManyMutationInput, TokenUsageUncheckedUpdateManyInput>
    /**
     * Filter which TokenUsages to update
     */
    where?: TokenUsageWhereInput
    /**
     * Limit how many TokenUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenUsage upsert
   */
  export type TokenUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenUsage to update in case it exists.
     */
    where: TokenUsageWhereUniqueInput
    /**
     * In case the TokenUsage found by the `where` argument doesn't exist, create a new TokenUsage with this data.
     */
    create: XOR<TokenUsageCreateInput, TokenUsageUncheckedCreateInput>
    /**
     * In case the TokenUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUsageUpdateInput, TokenUsageUncheckedUpdateInput>
  }

  /**
   * TokenUsage delete
   */
  export type TokenUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
    /**
     * Filter which TokenUsage to delete.
     */
    where: TokenUsageWhereUniqueInput
  }

  /**
   * TokenUsage deleteMany
   */
  export type TokenUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenUsages to delete
     */
    where?: TokenUsageWhereInput
    /**
     * Limit how many TokenUsages to delete.
     */
    limit?: number
  }

  /**
   * TokenUsage without action
   */
  export type TokenUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenUsage
     */
    select?: TokenUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenUsage
     */
    omit?: TokenUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenUsageInclude<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    dailyHours: number | null
    deadlineDays: number | null
  }

  export type SettingsSumAggregateOutputType = {
    dailyHours: number | null
    deadlineDays: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dailyHours: number | null
    deadlineDays: number | null
    aiModel: string | null
    emailNudges: boolean | null
    isPublic: boolean | null
    slug: string | null
    bio: string | null
    twitter: string | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dailyHours: number | null
    deadlineDays: number | null
    aiModel: string | null
    emailNudges: boolean | null
    isPublic: boolean | null
    slug: string | null
    bio: string | null
    twitter: string | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    userId: number
    dailyHours: number
    deadlineDays: number
    aiModel: number
    emailNudges: number
    isPublic: number
    slug: number
    bio: number
    twitter: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    dailyHours?: true
    deadlineDays?: true
  }

  export type SettingsSumAggregateInputType = {
    dailyHours?: true
    deadlineDays?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    userId?: true
    dailyHours?: true
    deadlineDays?: true
    aiModel?: true
    emailNudges?: true
    isPublic?: true
    slug?: true
    bio?: true
    twitter?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    dailyHours?: true
    deadlineDays?: true
    aiModel?: true
    emailNudges?: true
    isPublic?: true
    slug?: true
    bio?: true
    twitter?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    userId?: true
    dailyHours?: true
    deadlineDays?: true
    aiModel?: true
    emailNudges?: true
    isPublic?: true
    slug?: true
    bio?: true
    twitter?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    userId: string
    dailyHours: number
    deadlineDays: number
    aiModel: string
    emailNudges: boolean
    isPublic: boolean
    slug: string | null
    bio: string | null
    twitter: string | null
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dailyHours?: boolean
    deadlineDays?: boolean
    aiModel?: boolean
    emailNudges?: boolean
    isPublic?: boolean
    slug?: boolean
    bio?: boolean
    twitter?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dailyHours?: boolean
    deadlineDays?: boolean
    aiModel?: boolean
    emailNudges?: boolean
    isPublic?: boolean
    slug?: boolean
    bio?: boolean
    twitter?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dailyHours?: boolean
    deadlineDays?: boolean
    aiModel?: boolean
    emailNudges?: boolean
    isPublic?: boolean
    slug?: boolean
    bio?: boolean
    twitter?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    dailyHours?: boolean
    deadlineDays?: boolean
    aiModel?: boolean
    emailNudges?: boolean
    isPublic?: boolean
    slug?: boolean
    bio?: boolean
    twitter?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dailyHours" | "deadlineDays" | "aiModel" | "emailNudges" | "isPublic" | "slug" | "bio" | "twitter", ExtArgs["result"]["settings"]>
  export type SettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dailyHours: number
      deadlineDays: number
      aiModel: string
      emailNudges: boolean
      isPublic: boolean
      slug: string | null
      bio: string | null
      twitter: string | null
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly userId: FieldRef<"Settings", 'String'>
    readonly dailyHours: FieldRef<"Settings", 'Float'>
    readonly deadlineDays: FieldRef<"Settings", 'Int'>
    readonly aiModel: FieldRef<"Settings", 'String'>
    readonly emailNudges: FieldRef<"Settings", 'Boolean'>
    readonly isPublic: FieldRef<"Settings", 'Boolean'>
    readonly slug: FieldRef<"Settings", 'String'>
    readonly bio: FieldRef<"Settings", 'String'>
    readonly twitter: FieldRef<"Settings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    status: string | null
    planName: string | null
    currentPeriodEnd: Date | null
    trialEndsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    status: string | null
    planName: string | null
    currentPeriodEnd: Date | null
    trialEndsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    status: number
    planName: number
    currentPeriodEnd: number
    trialEndsAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    planName?: true
    currentPeriodEnd?: true
    trialEndsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    planName?: true
    currentPeriodEnd?: true
    trialEndsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    status?: true
    planName?: true
    currentPeriodEnd?: true
    trialEndsAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    planName: string
    currentPeriodEnd: Date
    trialEndsAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    planName?: boolean
    currentPeriodEnd?: boolean
    trialEndsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    planName?: boolean
    currentPeriodEnd?: boolean
    trialEndsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    planName?: boolean
    currentPeriodEnd?: boolean
    trialEndsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    planName?: boolean
    currentPeriodEnd?: boolean
    trialEndsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripeCustomerId" | "stripeSubscriptionId" | "status" | "planName" | "currentPeriodEnd" | "trialEndsAt" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stripeCustomerId: string
      stripeSubscriptionId: string
      status: string
      planName: string
      currentPeriodEnd: Date
      trialEndsAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly stripeCustomerId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly planName: FieldRef<"Subscription", 'String'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly trialEndsAt: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    name: 'name',
    username: 'username',
    onboardingCompleted: 'onboardingCompleted',
    discovery: 'discovery',
    role: 'role',
    bestStreakOverall: 'bestStreakOverall',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EarlyAccessScalarFieldEnum: {
    id: 'id',
    email: 'email',
    tier: 'tier',
    invited: 'invited',
    claimed: 'claimed',
    claimedAt: 'claimedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EarlyAccessScalarFieldEnum = (typeof EarlyAccessScalarFieldEnum)[keyof typeof EarlyAccessScalarFieldEnum]


  export const TrialScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plan: 'plan',
    startDate: 'startDate',
    endDate: 'endDate',
    expired: 'expired'
  };

  export type TrialScalarFieldEnum = (typeof TrialScalarFieldEnum)[keyof typeof TrialScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    problemStatement: 'problemStatement',
    targetAudience: 'targetAudience',
    userGoals: 'userGoals',
    uniqueValueProp: 'uniqueValueProp',
    isMvpGenerated: 'isMvpGenerated',
    isRoadmapGenerated: 'isRoadmapGenerated',
    currentStreak: 'currentStreak',
    AllTimeBestStreak: 'AllTimeBestStreak',
    active: 'active',
    techStack: 'techStack',
    inspirationApps: 'inspirationApps',
    initialFeatures: 'initialFeatures',
    startDate: 'startDate',
    deadline: 'deadline',
    dailyCommitmentHrs: 'dailyCommitmentHrs',
    userId: 'userId',
    mvpSummary: 'mvpSummary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const FeatureScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    rank: 'rank',
    productId: 'productId'
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    estimatedHours: 'estimatedHours',
    status: 'status',
    dayNumber: 'dayNumber',
    completed: 'completed',
    featureId: 'featureId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const DayTaskScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    dayIndex: 'dayIndex',
    dueDate: 'dueDate',
    completedAt: 'completedAt',
    category: 'category',
    description: 'description',
    status: 'status',
    milestoneGoal: 'milestoneGoal',
    shipCheck: 'shipCheck',
    buildLogId: 'buildLogId'
  };

  export type DayTaskScalarFieldEnum = (typeof DayTaskScalarFieldEnum)[keyof typeof DayTaskScalarFieldEnum]


  export const BuildLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    logDate: 'logDate',
    tweet: 'tweet',
    dayIndex: 'dayIndex',
    summary: 'summary',
    generatedAt: 'generatedAt'
  };

  export type BuildLogScalarFieldEnum = (typeof BuildLogScalarFieldEnum)[keyof typeof BuildLogScalarFieldEnum]


  export const DailyStreakScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    date: 'date',
    hasBuildLog: 'hasBuildLog',
    createdAt: 'createdAt'
  };

  export type DailyStreakScalarFieldEnum = (typeof DailyStreakScalarFieldEnum)[keyof typeof DailyStreakScalarFieldEnum]


  export const AiLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    ai_model: 'ai_model',
    type: 'type',
    input: 'input',
    output: 'output',
    createdAt: 'createdAt'
  };

  export type AiLogScalarFieldEnum = (typeof AiLogScalarFieldEnum)[keyof typeof AiLogScalarFieldEnum]


  export const TokenUsageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    purpose: 'purpose',
    tokens: 'tokens',
    createdAt: 'createdAt'
  };

  export type TokenUsageScalarFieldEnum = (typeof TokenUsageScalarFieldEnum)[keyof typeof TokenUsageScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dailyHours: 'dailyHours',
    deadlineDays: 'deadlineDays',
    aiModel: 'aiModel',
    emailNudges: 'emailNudges',
    isPublic: 'isPublic',
    slug: 'slug',
    bio: 'bio',
    twitter: 'twitter'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    status: 'status',
    planName: 'planName',
    currentPeriodEnd: 'currentPeriodEnd',
    trialEndsAt: 'trialEndsAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AccessTier'
   */
  export type EnumAccessTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessTier'>
    


  /**
   * Reference to a field of type 'AccessTier[]'
   */
  export type ListEnumAccessTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessTier[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    onboardingCompleted?: BoolFilter<"User"> | boolean
    discovery?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    bestStreakOverall?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    products?: ProductListRelationFilter
    buildLogs?: BuildLogListRelationFilter
    trial?: XOR<TrialNullableScalarRelationFilter, TrialWhereInput> | null
    DailyStreak?: DailyStreakListRelationFilter
    aiLogs?: AiLogListRelationFilter
    tokenUsages?: TokenUsageListRelationFilter
    settings?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    Subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrderInput | SortOrder
    onboardingCompleted?: SortOrder
    discovery?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    bestStreakOverall?: SortOrder
    createdAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    buildLogs?: BuildLogOrderByRelationAggregateInput
    trial?: TrialOrderByWithRelationInput
    DailyStreak?: DailyStreakOrderByRelationAggregateInput
    aiLogs?: AiLogOrderByRelationAggregateInput
    tokenUsages?: TokenUsageOrderByRelationAggregateInput
    settings?: SettingsOrderByWithRelationInput
    Subscription?: SubscriptionOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    onboardingCompleted?: BoolFilter<"User"> | boolean
    discovery?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    bestStreakOverall?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    products?: ProductListRelationFilter
    buildLogs?: BuildLogListRelationFilter
    trial?: XOR<TrialNullableScalarRelationFilter, TrialWhereInput> | null
    DailyStreak?: DailyStreakListRelationFilter
    aiLogs?: AiLogListRelationFilter
    tokenUsages?: TokenUsageListRelationFilter
    settings?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    Subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }, "id" | "clerkId" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrderInput | SortOrder
    onboardingCompleted?: SortOrder
    discovery?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    bestStreakOverall?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    onboardingCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    discovery?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    bestStreakOverall?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EarlyAccessWhereInput = {
    AND?: EarlyAccessWhereInput | EarlyAccessWhereInput[]
    OR?: EarlyAccessWhereInput[]
    NOT?: EarlyAccessWhereInput | EarlyAccessWhereInput[]
    id?: StringFilter<"EarlyAccess"> | string
    email?: StringFilter<"EarlyAccess"> | string
    tier?: EnumAccessTierFilter<"EarlyAccess"> | $Enums.AccessTier
    invited?: BoolFilter<"EarlyAccess"> | boolean
    claimed?: BoolFilter<"EarlyAccess"> | boolean
    claimedAt?: DateTimeNullableFilter<"EarlyAccess"> | Date | string | null
    createdAt?: DateTimeFilter<"EarlyAccess"> | Date | string
    updatedAt?: DateTimeFilter<"EarlyAccess"> | Date | string
  }

  export type EarlyAccessOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    tier?: SortOrder
    invited?: SortOrder
    claimed?: SortOrder
    claimedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EarlyAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EarlyAccessWhereInput | EarlyAccessWhereInput[]
    OR?: EarlyAccessWhereInput[]
    NOT?: EarlyAccessWhereInput | EarlyAccessWhereInput[]
    tier?: EnumAccessTierFilter<"EarlyAccess"> | $Enums.AccessTier
    invited?: BoolFilter<"EarlyAccess"> | boolean
    claimed?: BoolFilter<"EarlyAccess"> | boolean
    claimedAt?: DateTimeNullableFilter<"EarlyAccess"> | Date | string | null
    createdAt?: DateTimeFilter<"EarlyAccess"> | Date | string
    updatedAt?: DateTimeFilter<"EarlyAccess"> | Date | string
  }, "id" | "email">

  export type EarlyAccessOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    tier?: SortOrder
    invited?: SortOrder
    claimed?: SortOrder
    claimedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EarlyAccessCountOrderByAggregateInput
    _max?: EarlyAccessMaxOrderByAggregateInput
    _min?: EarlyAccessMinOrderByAggregateInput
  }

  export type EarlyAccessScalarWhereWithAggregatesInput = {
    AND?: EarlyAccessScalarWhereWithAggregatesInput | EarlyAccessScalarWhereWithAggregatesInput[]
    OR?: EarlyAccessScalarWhereWithAggregatesInput[]
    NOT?: EarlyAccessScalarWhereWithAggregatesInput | EarlyAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EarlyAccess"> | string
    email?: StringWithAggregatesFilter<"EarlyAccess"> | string
    tier?: EnumAccessTierWithAggregatesFilter<"EarlyAccess"> | $Enums.AccessTier
    invited?: BoolWithAggregatesFilter<"EarlyAccess"> | boolean
    claimed?: BoolWithAggregatesFilter<"EarlyAccess"> | boolean
    claimedAt?: DateTimeNullableWithAggregatesFilter<"EarlyAccess"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EarlyAccess"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EarlyAccess"> | Date | string
  }

  export type TrialWhereInput = {
    AND?: TrialWhereInput | TrialWhereInput[]
    OR?: TrialWhereInput[]
    NOT?: TrialWhereInput | TrialWhereInput[]
    id?: StringFilter<"Trial"> | string
    userId?: StringFilter<"Trial"> | string
    plan?: EnumAccessTierFilter<"Trial"> | $Enums.AccessTier
    startDate?: DateTimeFilter<"Trial"> | Date | string
    endDate?: DateTimeFilter<"Trial"> | Date | string
    expired?: BoolFilter<"Trial"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TrialOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    expired?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TrialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TrialWhereInput | TrialWhereInput[]
    OR?: TrialWhereInput[]
    NOT?: TrialWhereInput | TrialWhereInput[]
    plan?: EnumAccessTierFilter<"Trial"> | $Enums.AccessTier
    startDate?: DateTimeFilter<"Trial"> | Date | string
    endDate?: DateTimeFilter<"Trial"> | Date | string
    expired?: BoolFilter<"Trial"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TrialOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    expired?: SortOrder
    _count?: TrialCountOrderByAggregateInput
    _max?: TrialMaxOrderByAggregateInput
    _min?: TrialMinOrderByAggregateInput
  }

  export type TrialScalarWhereWithAggregatesInput = {
    AND?: TrialScalarWhereWithAggregatesInput | TrialScalarWhereWithAggregatesInput[]
    OR?: TrialScalarWhereWithAggregatesInput[]
    NOT?: TrialScalarWhereWithAggregatesInput | TrialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trial"> | string
    userId?: StringWithAggregatesFilter<"Trial"> | string
    plan?: EnumAccessTierWithAggregatesFilter<"Trial"> | $Enums.AccessTier
    startDate?: DateTimeWithAggregatesFilter<"Trial"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Trial"> | Date | string
    expired?: BoolWithAggregatesFilter<"Trial"> | boolean
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    problemStatement?: StringFilter<"Product"> | string
    targetAudience?: StringFilter<"Product"> | string
    userGoals?: StringFilter<"Product"> | string
    uniqueValueProp?: StringFilter<"Product"> | string
    isMvpGenerated?: BoolFilter<"Product"> | boolean
    isRoadmapGenerated?: BoolFilter<"Product"> | boolean
    currentStreak?: IntFilter<"Product"> | number
    AllTimeBestStreak?: IntFilter<"Product"> | number
    active?: BoolFilter<"Product"> | boolean
    techStack?: StringNullableFilter<"Product"> | string | null
    inspirationApps?: StringNullableFilter<"Product"> | string | null
    initialFeatures?: StringNullableFilter<"Product"> | string | null
    startDate?: DateTimeFilter<"Product"> | Date | string
    deadline?: DateTimeFilter<"Product"> | Date | string
    dailyCommitmentHrs?: FloatFilter<"Product"> | number
    userId?: StringFilter<"Product"> | string
    mvpSummary?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    features?: FeatureListRelationFilter
    buildLogs?: BuildLogListRelationFilter
    DailyStreak?: DailyStreakListRelationFilter
    aiLogs?: AiLogListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    problemStatement?: SortOrder
    targetAudience?: SortOrder
    userGoals?: SortOrder
    uniqueValueProp?: SortOrder
    isMvpGenerated?: SortOrder
    isRoadmapGenerated?: SortOrder
    currentStreak?: SortOrder
    AllTimeBestStreak?: SortOrder
    active?: SortOrder
    techStack?: SortOrderInput | SortOrder
    inspirationApps?: SortOrderInput | SortOrder
    initialFeatures?: SortOrderInput | SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    dailyCommitmentHrs?: SortOrder
    userId?: SortOrder
    mvpSummary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    features?: FeatureOrderByRelationAggregateInput
    buildLogs?: BuildLogOrderByRelationAggregateInput
    DailyStreak?: DailyStreakOrderByRelationAggregateInput
    aiLogs?: AiLogOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    problemStatement?: StringFilter<"Product"> | string
    targetAudience?: StringFilter<"Product"> | string
    userGoals?: StringFilter<"Product"> | string
    uniqueValueProp?: StringFilter<"Product"> | string
    isMvpGenerated?: BoolFilter<"Product"> | boolean
    isRoadmapGenerated?: BoolFilter<"Product"> | boolean
    currentStreak?: IntFilter<"Product"> | number
    AllTimeBestStreak?: IntFilter<"Product"> | number
    active?: BoolFilter<"Product"> | boolean
    techStack?: StringNullableFilter<"Product"> | string | null
    inspirationApps?: StringNullableFilter<"Product"> | string | null
    initialFeatures?: StringNullableFilter<"Product"> | string | null
    startDate?: DateTimeFilter<"Product"> | Date | string
    deadline?: DateTimeFilter<"Product"> | Date | string
    dailyCommitmentHrs?: FloatFilter<"Product"> | number
    userId?: StringFilter<"Product"> | string
    mvpSummary?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    features?: FeatureListRelationFilter
    buildLogs?: BuildLogListRelationFilter
    DailyStreak?: DailyStreakListRelationFilter
    aiLogs?: AiLogListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    problemStatement?: SortOrder
    targetAudience?: SortOrder
    userGoals?: SortOrder
    uniqueValueProp?: SortOrder
    isMvpGenerated?: SortOrder
    isRoadmapGenerated?: SortOrder
    currentStreak?: SortOrder
    AllTimeBestStreak?: SortOrder
    active?: SortOrder
    techStack?: SortOrderInput | SortOrder
    inspirationApps?: SortOrderInput | SortOrder
    initialFeatures?: SortOrderInput | SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    dailyCommitmentHrs?: SortOrder
    userId?: SortOrder
    mvpSummary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    problemStatement?: StringWithAggregatesFilter<"Product"> | string
    targetAudience?: StringWithAggregatesFilter<"Product"> | string
    userGoals?: StringWithAggregatesFilter<"Product"> | string
    uniqueValueProp?: StringWithAggregatesFilter<"Product"> | string
    isMvpGenerated?: BoolWithAggregatesFilter<"Product"> | boolean
    isRoadmapGenerated?: BoolWithAggregatesFilter<"Product"> | boolean
    currentStreak?: IntWithAggregatesFilter<"Product"> | number
    AllTimeBestStreak?: IntWithAggregatesFilter<"Product"> | number
    active?: BoolWithAggregatesFilter<"Product"> | boolean
    techStack?: StringNullableWithAggregatesFilter<"Product"> | string | null
    inspirationApps?: StringNullableWithAggregatesFilter<"Product"> | string | null
    initialFeatures?: StringNullableWithAggregatesFilter<"Product"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    deadline?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    dailyCommitmentHrs?: FloatWithAggregatesFilter<"Product"> | number
    userId?: StringWithAggregatesFilter<"Product"> | string
    mvpSummary?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type FeatureWhereInput = {
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    id?: StringFilter<"Feature"> | string
    name?: StringFilter<"Feature"> | string
    description?: StringFilter<"Feature"> | string
    rank?: IntFilter<"Feature"> | number
    productId?: StringFilter<"Feature"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type FeatureOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rank?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    name?: StringFilter<"Feature"> | string
    description?: StringFilter<"Feature"> | string
    rank?: IntFilter<"Feature"> | number
    productId?: StringFilter<"Feature"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type FeatureOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rank?: SortOrder
    productId?: SortOrder
    _count?: FeatureCountOrderByAggregateInput
    _avg?: FeatureAvgOrderByAggregateInput
    _max?: FeatureMaxOrderByAggregateInput
    _min?: FeatureMinOrderByAggregateInput
    _sum?: FeatureSumOrderByAggregateInput
  }

  export type FeatureScalarWhereWithAggregatesInput = {
    AND?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    OR?: FeatureScalarWhereWithAggregatesInput[]
    NOT?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feature"> | string
    name?: StringWithAggregatesFilter<"Feature"> | string
    description?: StringWithAggregatesFilter<"Feature"> | string
    rank?: IntWithAggregatesFilter<"Feature"> | number
    productId?: StringWithAggregatesFilter<"Feature"> | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    estimatedHours?: FloatNullableFilter<"Task"> | number | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    dayNumber?: IntNullableFilter<"Task"> | number | null
    completed?: BoolFilter<"Task"> | boolean
    featureId?: StringFilter<"Task"> | string
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
    dayTask?: XOR<DayTaskNullableScalarRelationFilter, DayTaskWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    status?: SortOrder
    dayNumber?: SortOrderInput | SortOrder
    completed?: SortOrder
    featureId?: SortOrder
    feature?: FeatureOrderByWithRelationInput
    dayTask?: DayTaskOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    estimatedHours?: FloatNullableFilter<"Task"> | number | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    dayNumber?: IntNullableFilter<"Task"> | number | null
    completed?: BoolFilter<"Task"> | boolean
    featureId?: StringFilter<"Task"> | string
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
    dayTask?: XOR<DayTaskNullableScalarRelationFilter, DayTaskWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    status?: SortOrder
    dayNumber?: SortOrderInput | SortOrder
    completed?: SortOrder
    featureId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    estimatedHours?: FloatNullableWithAggregatesFilter<"Task"> | number | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    dayNumber?: IntNullableWithAggregatesFilter<"Task"> | number | null
    completed?: BoolWithAggregatesFilter<"Task"> | boolean
    featureId?: StringWithAggregatesFilter<"Task"> | string
  }

  export type DayTaskWhereInput = {
    AND?: DayTaskWhereInput | DayTaskWhereInput[]
    OR?: DayTaskWhereInput[]
    NOT?: DayTaskWhereInput | DayTaskWhereInput[]
    id?: StringFilter<"DayTask"> | string
    taskId?: StringFilter<"DayTask"> | string
    dayIndex?: IntFilter<"DayTask"> | number
    dueDate?: DateTimeFilter<"DayTask"> | Date | string
    completedAt?: DateTimeNullableFilter<"DayTask"> | Date | string | null
    category?: StringFilter<"DayTask"> | string
    description?: StringFilter<"DayTask"> | string
    status?: StringFilter<"DayTask"> | string
    milestoneGoal?: StringNullableFilter<"DayTask"> | string | null
    shipCheck?: StringNullableFilter<"DayTask"> | string | null
    buildLogId?: StringNullableFilter<"DayTask"> | string | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    buildLog?: XOR<BuildLogNullableScalarRelationFilter, BuildLogWhereInput> | null
  }

  export type DayTaskOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    dayIndex?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    milestoneGoal?: SortOrderInput | SortOrder
    shipCheck?: SortOrderInput | SortOrder
    buildLogId?: SortOrderInput | SortOrder
    task?: TaskOrderByWithRelationInput
    buildLog?: BuildLogOrderByWithRelationInput
  }

  export type DayTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taskId?: string
    AND?: DayTaskWhereInput | DayTaskWhereInput[]
    OR?: DayTaskWhereInput[]
    NOT?: DayTaskWhereInput | DayTaskWhereInput[]
    dayIndex?: IntFilter<"DayTask"> | number
    dueDate?: DateTimeFilter<"DayTask"> | Date | string
    completedAt?: DateTimeNullableFilter<"DayTask"> | Date | string | null
    category?: StringFilter<"DayTask"> | string
    description?: StringFilter<"DayTask"> | string
    status?: StringFilter<"DayTask"> | string
    milestoneGoal?: StringNullableFilter<"DayTask"> | string | null
    shipCheck?: StringNullableFilter<"DayTask"> | string | null
    buildLogId?: StringNullableFilter<"DayTask"> | string | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    buildLog?: XOR<BuildLogNullableScalarRelationFilter, BuildLogWhereInput> | null
  }, "id" | "taskId">

  export type DayTaskOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    dayIndex?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    milestoneGoal?: SortOrderInput | SortOrder
    shipCheck?: SortOrderInput | SortOrder
    buildLogId?: SortOrderInput | SortOrder
    _count?: DayTaskCountOrderByAggregateInput
    _avg?: DayTaskAvgOrderByAggregateInput
    _max?: DayTaskMaxOrderByAggregateInput
    _min?: DayTaskMinOrderByAggregateInput
    _sum?: DayTaskSumOrderByAggregateInput
  }

  export type DayTaskScalarWhereWithAggregatesInput = {
    AND?: DayTaskScalarWhereWithAggregatesInput | DayTaskScalarWhereWithAggregatesInput[]
    OR?: DayTaskScalarWhereWithAggregatesInput[]
    NOT?: DayTaskScalarWhereWithAggregatesInput | DayTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DayTask"> | string
    taskId?: StringWithAggregatesFilter<"DayTask"> | string
    dayIndex?: IntWithAggregatesFilter<"DayTask"> | number
    dueDate?: DateTimeWithAggregatesFilter<"DayTask"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"DayTask"> | Date | string | null
    category?: StringWithAggregatesFilter<"DayTask"> | string
    description?: StringWithAggregatesFilter<"DayTask"> | string
    status?: StringWithAggregatesFilter<"DayTask"> | string
    milestoneGoal?: StringNullableWithAggregatesFilter<"DayTask"> | string | null
    shipCheck?: StringNullableWithAggregatesFilter<"DayTask"> | string | null
    buildLogId?: StringNullableWithAggregatesFilter<"DayTask"> | string | null
  }

  export type BuildLogWhereInput = {
    AND?: BuildLogWhereInput | BuildLogWhereInput[]
    OR?: BuildLogWhereInput[]
    NOT?: BuildLogWhereInput | BuildLogWhereInput[]
    id?: StringFilter<"BuildLog"> | string
    userId?: StringFilter<"BuildLog"> | string
    productId?: StringFilter<"BuildLog"> | string
    logDate?: DateTimeFilter<"BuildLog"> | Date | string
    tweet?: StringNullableFilter<"BuildLog"> | string | null
    dayIndex?: IntFilter<"BuildLog"> | number
    summary?: StringFilter<"BuildLog"> | string
    generatedAt?: DateTimeFilter<"BuildLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    DayTask?: DayTaskListRelationFilter
  }

  export type BuildLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    logDate?: SortOrder
    tweet?: SortOrderInput | SortOrder
    dayIndex?: SortOrder
    summary?: SortOrder
    generatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    DayTask?: DayTaskOrderByRelationAggregateInput
  }

  export type BuildLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BuildLogWhereInput | BuildLogWhereInput[]
    OR?: BuildLogWhereInput[]
    NOT?: BuildLogWhereInput | BuildLogWhereInput[]
    userId?: StringFilter<"BuildLog"> | string
    productId?: StringFilter<"BuildLog"> | string
    logDate?: DateTimeFilter<"BuildLog"> | Date | string
    tweet?: StringNullableFilter<"BuildLog"> | string | null
    dayIndex?: IntFilter<"BuildLog"> | number
    summary?: StringFilter<"BuildLog"> | string
    generatedAt?: DateTimeFilter<"BuildLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    DayTask?: DayTaskListRelationFilter
  }, "id">

  export type BuildLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    logDate?: SortOrder
    tweet?: SortOrderInput | SortOrder
    dayIndex?: SortOrder
    summary?: SortOrder
    generatedAt?: SortOrder
    _count?: BuildLogCountOrderByAggregateInput
    _avg?: BuildLogAvgOrderByAggregateInput
    _max?: BuildLogMaxOrderByAggregateInput
    _min?: BuildLogMinOrderByAggregateInput
    _sum?: BuildLogSumOrderByAggregateInput
  }

  export type BuildLogScalarWhereWithAggregatesInput = {
    AND?: BuildLogScalarWhereWithAggregatesInput | BuildLogScalarWhereWithAggregatesInput[]
    OR?: BuildLogScalarWhereWithAggregatesInput[]
    NOT?: BuildLogScalarWhereWithAggregatesInput | BuildLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BuildLog"> | string
    userId?: StringWithAggregatesFilter<"BuildLog"> | string
    productId?: StringWithAggregatesFilter<"BuildLog"> | string
    logDate?: DateTimeWithAggregatesFilter<"BuildLog"> | Date | string
    tweet?: StringNullableWithAggregatesFilter<"BuildLog"> | string | null
    dayIndex?: IntWithAggregatesFilter<"BuildLog"> | number
    summary?: StringWithAggregatesFilter<"BuildLog"> | string
    generatedAt?: DateTimeWithAggregatesFilter<"BuildLog"> | Date | string
  }

  export type DailyStreakWhereInput = {
    AND?: DailyStreakWhereInput | DailyStreakWhereInput[]
    OR?: DailyStreakWhereInput[]
    NOT?: DailyStreakWhereInput | DailyStreakWhereInput[]
    id?: StringFilter<"DailyStreak"> | string
    userId?: StringFilter<"DailyStreak"> | string
    productId?: StringFilter<"DailyStreak"> | string
    date?: DateTimeFilter<"DailyStreak"> | Date | string
    hasBuildLog?: BoolFilter<"DailyStreak"> | boolean
    createdAt?: DateTimeFilter<"DailyStreak"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type DailyStreakOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    hasBuildLog?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type DailyStreakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date?: Date | string
    AND?: DailyStreakWhereInput | DailyStreakWhereInput[]
    OR?: DailyStreakWhereInput[]
    NOT?: DailyStreakWhereInput | DailyStreakWhereInput[]
    userId?: StringFilter<"DailyStreak"> | string
    productId?: StringFilter<"DailyStreak"> | string
    hasBuildLog?: BoolFilter<"DailyStreak"> | boolean
    createdAt?: DateTimeFilter<"DailyStreak"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "date">

  export type DailyStreakOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    hasBuildLog?: SortOrder
    createdAt?: SortOrder
    _count?: DailyStreakCountOrderByAggregateInput
    _max?: DailyStreakMaxOrderByAggregateInput
    _min?: DailyStreakMinOrderByAggregateInput
  }

  export type DailyStreakScalarWhereWithAggregatesInput = {
    AND?: DailyStreakScalarWhereWithAggregatesInput | DailyStreakScalarWhereWithAggregatesInput[]
    OR?: DailyStreakScalarWhereWithAggregatesInput[]
    NOT?: DailyStreakScalarWhereWithAggregatesInput | DailyStreakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyStreak"> | string
    userId?: StringWithAggregatesFilter<"DailyStreak"> | string
    productId?: StringWithAggregatesFilter<"DailyStreak"> | string
    date?: DateTimeWithAggregatesFilter<"DailyStreak"> | Date | string
    hasBuildLog?: BoolWithAggregatesFilter<"DailyStreak"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DailyStreak"> | Date | string
  }

  export type AiLogWhereInput = {
    AND?: AiLogWhereInput | AiLogWhereInput[]
    OR?: AiLogWhereInput[]
    NOT?: AiLogWhereInput | AiLogWhereInput[]
    id?: StringFilter<"AiLog"> | string
    userId?: StringFilter<"AiLog"> | string
    productId?: StringFilter<"AiLog"> | string
    ai_model?: StringFilter<"AiLog"> | string
    type?: StringFilter<"AiLog"> | string
    input?: JsonFilter<"AiLog">
    output?: JsonFilter<"AiLog">
    createdAt?: DateTimeFilter<"AiLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type AiLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    ai_model?: SortOrder
    type?: SortOrder
    input?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type AiLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiLogWhereInput | AiLogWhereInput[]
    OR?: AiLogWhereInput[]
    NOT?: AiLogWhereInput | AiLogWhereInput[]
    userId?: StringFilter<"AiLog"> | string
    productId?: StringFilter<"AiLog"> | string
    ai_model?: StringFilter<"AiLog"> | string
    type?: StringFilter<"AiLog"> | string
    input?: JsonFilter<"AiLog">
    output?: JsonFilter<"AiLog">
    createdAt?: DateTimeFilter<"AiLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type AiLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    ai_model?: SortOrder
    type?: SortOrder
    input?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
    _count?: AiLogCountOrderByAggregateInput
    _max?: AiLogMaxOrderByAggregateInput
    _min?: AiLogMinOrderByAggregateInput
  }

  export type AiLogScalarWhereWithAggregatesInput = {
    AND?: AiLogScalarWhereWithAggregatesInput | AiLogScalarWhereWithAggregatesInput[]
    OR?: AiLogScalarWhereWithAggregatesInput[]
    NOT?: AiLogScalarWhereWithAggregatesInput | AiLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiLog"> | string
    userId?: StringWithAggregatesFilter<"AiLog"> | string
    productId?: StringWithAggregatesFilter<"AiLog"> | string
    ai_model?: StringWithAggregatesFilter<"AiLog"> | string
    type?: StringWithAggregatesFilter<"AiLog"> | string
    input?: JsonWithAggregatesFilter<"AiLog">
    output?: JsonWithAggregatesFilter<"AiLog">
    createdAt?: DateTimeWithAggregatesFilter<"AiLog"> | Date | string
  }

  export type TokenUsageWhereInput = {
    AND?: TokenUsageWhereInput | TokenUsageWhereInput[]
    OR?: TokenUsageWhereInput[]
    NOT?: TokenUsageWhereInput | TokenUsageWhereInput[]
    id?: StringFilter<"TokenUsage"> | string
    userId?: StringFilter<"TokenUsage"> | string
    purpose?: StringFilter<"TokenUsage"> | string
    tokens?: IntFilter<"TokenUsage"> | number
    createdAt?: DateTimeFilter<"TokenUsage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenUsageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    purpose?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenUsageWhereInput | TokenUsageWhereInput[]
    OR?: TokenUsageWhereInput[]
    NOT?: TokenUsageWhereInput | TokenUsageWhereInput[]
    userId?: StringFilter<"TokenUsage"> | string
    purpose?: StringFilter<"TokenUsage"> | string
    tokens?: IntFilter<"TokenUsage"> | number
    createdAt?: DateTimeFilter<"TokenUsage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TokenUsageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    purpose?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
    _count?: TokenUsageCountOrderByAggregateInput
    _avg?: TokenUsageAvgOrderByAggregateInput
    _max?: TokenUsageMaxOrderByAggregateInput
    _min?: TokenUsageMinOrderByAggregateInput
    _sum?: TokenUsageSumOrderByAggregateInput
  }

  export type TokenUsageScalarWhereWithAggregatesInput = {
    AND?: TokenUsageScalarWhereWithAggregatesInput | TokenUsageScalarWhereWithAggregatesInput[]
    OR?: TokenUsageScalarWhereWithAggregatesInput[]
    NOT?: TokenUsageScalarWhereWithAggregatesInput | TokenUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenUsage"> | string
    userId?: StringWithAggregatesFilter<"TokenUsage"> | string
    purpose?: StringWithAggregatesFilter<"TokenUsage"> | string
    tokens?: IntWithAggregatesFilter<"TokenUsage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TokenUsage"> | Date | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    userId?: StringFilter<"Settings"> | string
    dailyHours?: FloatFilter<"Settings"> | number
    deadlineDays?: IntFilter<"Settings"> | number
    aiModel?: StringFilter<"Settings"> | string
    emailNudges?: BoolFilter<"Settings"> | boolean
    isPublic?: BoolFilter<"Settings"> | boolean
    slug?: StringNullableFilter<"Settings"> | string | null
    bio?: StringNullableFilter<"Settings"> | string | null
    twitter?: StringNullableFilter<"Settings"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dailyHours?: SortOrder
    deadlineDays?: SortOrder
    aiModel?: SortOrder
    emailNudges?: SortOrder
    isPublic?: SortOrder
    slug?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    slug?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    dailyHours?: FloatFilter<"Settings"> | number
    deadlineDays?: IntFilter<"Settings"> | number
    aiModel?: StringFilter<"Settings"> | string
    emailNudges?: BoolFilter<"Settings"> | boolean
    isPublic?: BoolFilter<"Settings"> | boolean
    bio?: StringNullableFilter<"Settings"> | string | null
    twitter?: StringNullableFilter<"Settings"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "slug">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dailyHours?: SortOrder
    deadlineDays?: SortOrder
    aiModel?: SortOrder
    emailNudges?: SortOrder
    isPublic?: SortOrder
    slug?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    userId?: StringWithAggregatesFilter<"Settings"> | string
    dailyHours?: FloatWithAggregatesFilter<"Settings"> | number
    deadlineDays?: IntWithAggregatesFilter<"Settings"> | number
    aiModel?: StringWithAggregatesFilter<"Settings"> | string
    emailNudges?: BoolWithAggregatesFilter<"Settings"> | boolean
    isPublic?: BoolWithAggregatesFilter<"Settings"> | boolean
    slug?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"Settings"> | string | null
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    stripeCustomerId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    planName?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    trialEndsAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    planName?: SortOrder
    currentPeriodEnd?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    stripeCustomerId?: string
    stripeSubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    status?: StringFilter<"Subscription"> | string
    planName?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    trialEndsAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "stripeCustomerId" | "stripeSubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    planName?: SortOrder
    currentPeriodEnd?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeCustomerId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeSubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    planName?: StringWithAggregatesFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    trialEndsAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogCreateNestedManyWithoutUserInput
    trial?: TrialCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutUserInput
    aiLogs?: AiLogCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutUserInput
    trial?: TrialUncheckedCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUpdateManyWithoutUserNestedInput
    trial?: TrialUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUncheckedUpdateManyWithoutUserNestedInput
    trial?: TrialUncheckedUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarlyAccessCreateInput = {
    id?: string
    email: string
    tier?: $Enums.AccessTier
    invited?: boolean
    claimed?: boolean
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EarlyAccessUncheckedCreateInput = {
    id?: string
    email: string
    tier?: $Enums.AccessTier
    invited?: boolean
    claimed?: boolean
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EarlyAccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tier?: EnumAccessTierFieldUpdateOperationsInput | $Enums.AccessTier
    invited?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarlyAccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tier?: EnumAccessTierFieldUpdateOperationsInput | $Enums.AccessTier
    invited?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarlyAccessCreateManyInput = {
    id?: string
    email: string
    tier?: $Enums.AccessTier
    invited?: boolean
    claimed?: boolean
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EarlyAccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tier?: EnumAccessTierFieldUpdateOperationsInput | $Enums.AccessTier
    invited?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarlyAccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tier?: EnumAccessTierFieldUpdateOperationsInput | $Enums.AccessTier
    invited?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrialCreateInput = {
    id?: string
    plan?: $Enums.AccessTier
    startDate: Date | string
    endDate: Date | string
    expired?: boolean
    user: UserCreateNestedOneWithoutTrialInput
  }

  export type TrialUncheckedCreateInput = {
    id?: string
    userId: string
    plan?: $Enums.AccessTier
    startDate: Date | string
    endDate: Date | string
    expired?: boolean
  }

  export type TrialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumAccessTierFieldUpdateOperationsInput | $Enums.AccessTier
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expired?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTrialNestedInput
  }

  export type TrialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: EnumAccessTierFieldUpdateOperationsInput | $Enums.AccessTier
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrialCreateManyInput = {
    id?: string
    userId: string
    plan?: $Enums.AccessTier
    startDate: Date | string
    endDate: Date | string
    expired?: boolean
  }

  export type TrialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumAccessTierFieldUpdateOperationsInput | $Enums.AccessTier
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: EnumAccessTierFieldUpdateOperationsInput | $Enums.AccessTier
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductsInput
    features?: FeatureCreateNestedManyWithoutProductInput
    buildLogs?: BuildLogCreateNestedManyWithoutProductInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutProductInput
    aiLogs?: AiLogCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    userId: string
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    features?: FeatureUncheckedCreateNestedManyWithoutProductInput
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutProductInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutProductInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
    features?: FeatureUpdateManyWithoutProductNestedInput
    buildLogs?: BuildLogUpdateManyWithoutProductNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutProductNestedInput
    aiLogs?: AiLogUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUncheckedUpdateManyWithoutProductNestedInput
    buildLogs?: BuildLogUncheckedUpdateManyWithoutProductNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutProductNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    userId: string
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCreateInput = {
    id?: string
    name: string
    description: string
    rank: number
    product: ProductCreateNestedOneWithoutFeaturesInput
    tasks?: TaskCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    rank: number
    productId: string
    tasks?: TaskUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutFeaturesNestedInput
    tasks?: TaskUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureCreateManyInput = {
    id?: string
    name: string
    description: string
    rank: number
    productId: string
  }

  export type FeatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type FeatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    estimatedHours?: number | null
    status?: $Enums.TaskStatus
    dayNumber?: number | null
    completed?: boolean
    feature: FeatureCreateNestedOneWithoutTasksInput
    dayTask?: DayTaskCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    estimatedHours?: number | null
    status?: $Enums.TaskStatus
    dayNumber?: number | null
    completed?: boolean
    featureId: string
    dayTask?: DayTaskUncheckedCreateNestedOneWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dayNumber?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    feature?: FeatureUpdateOneRequiredWithoutTasksNestedInput
    dayTask?: DayTaskUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dayNumber?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    featureId?: StringFieldUpdateOperationsInput | string
    dayTask?: DayTaskUncheckedUpdateOneWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    estimatedHours?: number | null
    status?: $Enums.TaskStatus
    dayNumber?: number | null
    completed?: boolean
    featureId: string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dayNumber?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dayNumber?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    featureId?: StringFieldUpdateOperationsInput | string
  }

  export type DayTaskCreateInput = {
    id?: string
    dayIndex: number
    dueDate: Date | string
    completedAt?: Date | string | null
    category: string
    description: string
    status?: string
    milestoneGoal?: string | null
    shipCheck?: string | null
    task: TaskCreateNestedOneWithoutDayTaskInput
    buildLog?: BuildLogCreateNestedOneWithoutDayTaskInput
  }

  export type DayTaskUncheckedCreateInput = {
    id?: string
    taskId: string
    dayIndex: number
    dueDate: Date | string
    completedAt?: Date | string | null
    category: string
    description: string
    status?: string
    milestoneGoal?: string | null
    shipCheck?: string | null
    buildLogId?: string | null
  }

  export type DayTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    milestoneGoal?: NullableStringFieldUpdateOperationsInput | string | null
    shipCheck?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TaskUpdateOneRequiredWithoutDayTaskNestedInput
    buildLog?: BuildLogUpdateOneWithoutDayTaskNestedInput
  }

  export type DayTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    milestoneGoal?: NullableStringFieldUpdateOperationsInput | string | null
    shipCheck?: NullableStringFieldUpdateOperationsInput | string | null
    buildLogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DayTaskCreateManyInput = {
    id?: string
    taskId: string
    dayIndex: number
    dueDate: Date | string
    completedAt?: Date | string | null
    category: string
    description: string
    status?: string
    milestoneGoal?: string | null
    shipCheck?: string | null
    buildLogId?: string | null
  }

  export type DayTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    milestoneGoal?: NullableStringFieldUpdateOperationsInput | string | null
    shipCheck?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DayTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    milestoneGoal?: NullableStringFieldUpdateOperationsInput | string | null
    shipCheck?: NullableStringFieldUpdateOperationsInput | string | null
    buildLogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuildLogCreateInput = {
    id?: string
    logDate: Date | string
    tweet?: string | null
    dayIndex?: number
    summary: string
    generatedAt?: Date | string
    user: UserCreateNestedOneWithoutBuildLogsInput
    product: ProductCreateNestedOneWithoutBuildLogsInput
    DayTask?: DayTaskCreateNestedManyWithoutBuildLogInput
  }

  export type BuildLogUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    logDate: Date | string
    tweet?: string | null
    dayIndex?: number
    summary: string
    generatedAt?: Date | string
    DayTask?: DayTaskUncheckedCreateNestedManyWithoutBuildLogInput
  }

  export type BuildLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBuildLogsNestedInput
    product?: ProductUpdateOneRequiredWithoutBuildLogsNestedInput
    DayTask?: DayTaskUpdateManyWithoutBuildLogNestedInput
  }

  export type BuildLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DayTask?: DayTaskUncheckedUpdateManyWithoutBuildLogNestedInput
  }

  export type BuildLogCreateManyInput = {
    id?: string
    userId: string
    productId: string
    logDate: Date | string
    tweet?: string | null
    dayIndex?: number
    summary: string
    generatedAt?: Date | string
  }

  export type BuildLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakCreateInput = {
    id?: string
    date: Date | string
    hasBuildLog?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDailyStreakInput
    product: ProductCreateNestedOneWithoutDailyStreakInput
  }

  export type DailyStreakUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    date: Date | string
    hasBuildLog?: boolean
    createdAt?: Date | string
  }

  export type DailyStreakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hasBuildLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyStreakNestedInput
    product?: ProductUpdateOneRequiredWithoutDailyStreakNestedInput
  }

  export type DailyStreakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hasBuildLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakCreateManyInput = {
    id?: string
    userId: string
    productId: string
    date: Date | string
    hasBuildLog?: boolean
    createdAt?: Date | string
  }

  export type DailyStreakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hasBuildLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hasBuildLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiLogCreateInput = {
    id?: string
    ai_model: string
    type: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAiLogsInput
    product: ProductCreateNestedOneWithoutAiLogsInput
  }

  export type AiLogUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    ai_model: string
    type: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AiLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ai_model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiLogsNestedInput
    product?: ProductUpdateOneRequiredWithoutAiLogsNestedInput
  }

  export type AiLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    ai_model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiLogCreateManyInput = {
    id?: string
    userId: string
    productId: string
    ai_model: string
    type: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AiLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ai_model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    ai_model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageCreateInput = {
    id?: string
    purpose: string
    tokens: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenUsagesInput
  }

  export type TokenUsageUncheckedCreateInput = {
    id?: string
    userId: string
    purpose: string
    tokens: number
    createdAt?: Date | string
  }

  export type TokenUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenUsagesNestedInput
  }

  export type TokenUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageCreateManyInput = {
    id?: string
    userId: string
    purpose: string
    tokens: number
    createdAt?: Date | string
  }

  export type TokenUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateInput = {
    id?: string
    dailyHours?: number
    deadlineDays?: number
    aiModel?: string
    emailNudges?: boolean
    isPublic?: boolean
    slug?: string | null
    bio?: string | null
    twitter?: string | null
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    userId: string
    dailyHours?: number
    deadlineDays?: number
    aiModel?: string
    emailNudges?: boolean
    isPublic?: boolean
    slug?: string | null
    bio?: string | null
    twitter?: string | null
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyHours?: FloatFieldUpdateOperationsInput | number
    deadlineDays?: IntFieldUpdateOperationsInput | number
    aiModel?: StringFieldUpdateOperationsInput | string
    emailNudges?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dailyHours?: FloatFieldUpdateOperationsInput | number
    deadlineDays?: IntFieldUpdateOperationsInput | number
    aiModel?: StringFieldUpdateOperationsInput | string
    emailNudges?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsCreateManyInput = {
    id?: string
    userId: string
    dailyHours?: number
    deadlineDays?: number
    aiModel?: string
    emailNudges?: boolean
    isPublic?: boolean
    slug?: string | null
    bio?: string | null
    twitter?: string | null
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyHours?: FloatFieldUpdateOperationsInput | number
    deadlineDays?: IntFieldUpdateOperationsInput | number
    aiModel?: StringFieldUpdateOperationsInput | string
    emailNudges?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dailyHours?: FloatFieldUpdateOperationsInput | number
    deadlineDays?: IntFieldUpdateOperationsInput | number
    aiModel?: StringFieldUpdateOperationsInput | string
    emailNudges?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionCreateInput = {
    id?: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    planName: string
    currentPeriodEnd: Date | string
    trialEndsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    planName: string
    currentPeriodEnd: Date | string
    trialEndsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    planName: string
    currentPeriodEnd: Date | string
    trialEndsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type BuildLogListRelationFilter = {
    every?: BuildLogWhereInput
    some?: BuildLogWhereInput
    none?: BuildLogWhereInput
  }

  export type TrialNullableScalarRelationFilter = {
    is?: TrialWhereInput | null
    isNot?: TrialWhereInput | null
  }

  export type DailyStreakListRelationFilter = {
    every?: DailyStreakWhereInput
    some?: DailyStreakWhereInput
    none?: DailyStreakWhereInput
  }

  export type AiLogListRelationFilter = {
    every?: AiLogWhereInput
    some?: AiLogWhereInput
    none?: AiLogWhereInput
  }

  export type TokenUsageListRelationFilter = {
    every?: TokenUsageWhereInput
    some?: TokenUsageWhereInput
    none?: TokenUsageWhereInput
  }

  export type SettingsNullableScalarRelationFilter = {
    is?: SettingsWhereInput | null
    isNot?: SettingsWhereInput | null
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyStreakOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    onboardingCompleted?: SortOrder
    discovery?: SortOrder
    role?: SortOrder
    bestStreakOverall?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    bestStreakOverall?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    onboardingCompleted?: SortOrder
    discovery?: SortOrder
    role?: SortOrder
    bestStreakOverall?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    onboardingCompleted?: SortOrder
    discovery?: SortOrder
    role?: SortOrder
    bestStreakOverall?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    bestStreakOverall?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAccessTierFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessTier | EnumAccessTierFieldRefInput<$PrismaModel>
    in?: $Enums.AccessTier[] | ListEnumAccessTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessTier[] | ListEnumAccessTierFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTierFilter<$PrismaModel> | $Enums.AccessTier
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EarlyAccessCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    tier?: SortOrder
    invited?: SortOrder
    claimed?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EarlyAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    tier?: SortOrder
    invited?: SortOrder
    claimed?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EarlyAccessMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    tier?: SortOrder
    invited?: SortOrder
    claimed?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAccessTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessTier | EnumAccessTierFieldRefInput<$PrismaModel>
    in?: $Enums.AccessTier[] | ListEnumAccessTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessTier[] | ListEnumAccessTierFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTierWithAggregatesFilter<$PrismaModel> | $Enums.AccessTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessTierFilter<$PrismaModel>
    _max?: NestedEnumAccessTierFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TrialCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    expired?: SortOrder
  }

  export type TrialMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    expired?: SortOrder
  }

  export type TrialMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    expired?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FeatureListRelationFilter = {
    every?: FeatureWhereInput
    some?: FeatureWhereInput
    none?: FeatureWhereInput
  }

  export type FeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    problemStatement?: SortOrder
    targetAudience?: SortOrder
    userGoals?: SortOrder
    uniqueValueProp?: SortOrder
    isMvpGenerated?: SortOrder
    isRoadmapGenerated?: SortOrder
    currentStreak?: SortOrder
    AllTimeBestStreak?: SortOrder
    active?: SortOrder
    techStack?: SortOrder
    inspirationApps?: SortOrder
    initialFeatures?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    dailyCommitmentHrs?: SortOrder
    userId?: SortOrder
    mvpSummary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
    AllTimeBestStreak?: SortOrder
    dailyCommitmentHrs?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    problemStatement?: SortOrder
    targetAudience?: SortOrder
    userGoals?: SortOrder
    uniqueValueProp?: SortOrder
    isMvpGenerated?: SortOrder
    isRoadmapGenerated?: SortOrder
    currentStreak?: SortOrder
    AllTimeBestStreak?: SortOrder
    active?: SortOrder
    techStack?: SortOrder
    inspirationApps?: SortOrder
    initialFeatures?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    dailyCommitmentHrs?: SortOrder
    userId?: SortOrder
    mvpSummary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    problemStatement?: SortOrder
    targetAudience?: SortOrder
    userGoals?: SortOrder
    uniqueValueProp?: SortOrder
    isMvpGenerated?: SortOrder
    isRoadmapGenerated?: SortOrder
    currentStreak?: SortOrder
    AllTimeBestStreak?: SortOrder
    active?: SortOrder
    techStack?: SortOrder
    inspirationApps?: SortOrder
    initialFeatures?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    dailyCommitmentHrs?: SortOrder
    userId?: SortOrder
    mvpSummary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    currentStreak?: SortOrder
    AllTimeBestStreak?: SortOrder
    dailyCommitmentHrs?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rank?: SortOrder
    productId?: SortOrder
  }

  export type FeatureAvgOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type FeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rank?: SortOrder
    productId?: SortOrder
  }

  export type FeatureMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rank?: SortOrder
    productId?: SortOrder
  }

  export type FeatureSumOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FeatureScalarRelationFilter = {
    is?: FeatureWhereInput
    isNot?: FeatureWhereInput
  }

  export type DayTaskNullableScalarRelationFilter = {
    is?: DayTaskWhereInput | null
    isNot?: DayTaskWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    estimatedHours?: SortOrder
    status?: SortOrder
    dayNumber?: SortOrder
    completed?: SortOrder
    featureId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    estimatedHours?: SortOrder
    dayNumber?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    estimatedHours?: SortOrder
    status?: SortOrder
    dayNumber?: SortOrder
    completed?: SortOrder
    featureId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    estimatedHours?: SortOrder
    status?: SortOrder
    dayNumber?: SortOrder
    completed?: SortOrder
    featureId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    estimatedHours?: SortOrder
    dayNumber?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type BuildLogNullableScalarRelationFilter = {
    is?: BuildLogWhereInput | null
    isNot?: BuildLogWhereInput | null
  }

  export type DayTaskCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    dayIndex?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    milestoneGoal?: SortOrder
    shipCheck?: SortOrder
    buildLogId?: SortOrder
  }

  export type DayTaskAvgOrderByAggregateInput = {
    dayIndex?: SortOrder
  }

  export type DayTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    dayIndex?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    milestoneGoal?: SortOrder
    shipCheck?: SortOrder
    buildLogId?: SortOrder
  }

  export type DayTaskMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    dayIndex?: SortOrder
    dueDate?: SortOrder
    completedAt?: SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    milestoneGoal?: SortOrder
    shipCheck?: SortOrder
    buildLogId?: SortOrder
  }

  export type DayTaskSumOrderByAggregateInput = {
    dayIndex?: SortOrder
  }

  export type DayTaskListRelationFilter = {
    every?: DayTaskWhereInput
    some?: DayTaskWhereInput
    none?: DayTaskWhereInput
  }

  export type DayTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    logDate?: SortOrder
    tweet?: SortOrder
    dayIndex?: SortOrder
    summary?: SortOrder
    generatedAt?: SortOrder
  }

  export type BuildLogAvgOrderByAggregateInput = {
    dayIndex?: SortOrder
  }

  export type BuildLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    logDate?: SortOrder
    tweet?: SortOrder
    dayIndex?: SortOrder
    summary?: SortOrder
    generatedAt?: SortOrder
  }

  export type BuildLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    logDate?: SortOrder
    tweet?: SortOrder
    dayIndex?: SortOrder
    summary?: SortOrder
    generatedAt?: SortOrder
  }

  export type BuildLogSumOrderByAggregateInput = {
    dayIndex?: SortOrder
  }

  export type DailyStreakCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    hasBuildLog?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyStreakMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    hasBuildLog?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyStreakMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    hasBuildLog?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AiLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    ai_model?: SortOrder
    type?: SortOrder
    input?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
  }

  export type AiLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    ai_model?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type AiLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    ai_model?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TokenUsageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    purpose?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenUsageAvgOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type TokenUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    purpose?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenUsageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    purpose?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenUsageSumOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dailyHours?: SortOrder
    deadlineDays?: SortOrder
    aiModel?: SortOrder
    emailNudges?: SortOrder
    isPublic?: SortOrder
    slug?: SortOrder
    bio?: SortOrder
    twitter?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    dailyHours?: SortOrder
    deadlineDays?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dailyHours?: SortOrder
    deadlineDays?: SortOrder
    aiModel?: SortOrder
    emailNudges?: SortOrder
    isPublic?: SortOrder
    slug?: SortOrder
    bio?: SortOrder
    twitter?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dailyHours?: SortOrder
    deadlineDays?: SortOrder
    aiModel?: SortOrder
    emailNudges?: SortOrder
    isPublic?: SortOrder
    slug?: SortOrder
    bio?: SortOrder
    twitter?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    dailyHours?: SortOrder
    deadlineDays?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    planName?: SortOrder
    currentPeriodEnd?: SortOrder
    trialEndsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    planName?: SortOrder
    currentPeriodEnd?: SortOrder
    trialEndsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    planName?: SortOrder
    currentPeriodEnd?: SortOrder
    trialEndsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BuildLogCreateNestedManyWithoutUserInput = {
    create?: XOR<BuildLogCreateWithoutUserInput, BuildLogUncheckedCreateWithoutUserInput> | BuildLogCreateWithoutUserInput[] | BuildLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildLogCreateOrConnectWithoutUserInput | BuildLogCreateOrConnectWithoutUserInput[]
    createMany?: BuildLogCreateManyUserInputEnvelope
    connect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
  }

  export type TrialCreateNestedOneWithoutUserInput = {
    create?: XOR<TrialCreateWithoutUserInput, TrialUncheckedCreateWithoutUserInput>
    connectOrCreate?: TrialCreateOrConnectWithoutUserInput
    connect?: TrialWhereUniqueInput
  }

  export type DailyStreakCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput> | DailyStreakCreateWithoutUserInput[] | DailyStreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutUserInput | DailyStreakCreateOrConnectWithoutUserInput[]
    createMany?: DailyStreakCreateManyUserInputEnvelope
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
  }

  export type AiLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AiLogCreateWithoutUserInput, AiLogUncheckedCreateWithoutUserInput> | AiLogCreateWithoutUserInput[] | AiLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiLogCreateOrConnectWithoutUserInput | AiLogCreateOrConnectWithoutUserInput[]
    createMany?: AiLogCreateManyUserInputEnvelope
    connect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
  }

  export type TokenUsageCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput> | TokenUsageCreateWithoutUserInput[] | TokenUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenUsageCreateOrConnectWithoutUserInput | TokenUsageCreateOrConnectWithoutUserInput[]
    createMany?: TokenUsageCreateManyUserInputEnvelope
    connect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
  }

  export type SettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    connect?: SettingsWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BuildLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BuildLogCreateWithoutUserInput, BuildLogUncheckedCreateWithoutUserInput> | BuildLogCreateWithoutUserInput[] | BuildLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildLogCreateOrConnectWithoutUserInput | BuildLogCreateOrConnectWithoutUserInput[]
    createMany?: BuildLogCreateManyUserInputEnvelope
    connect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
  }

  export type TrialUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TrialCreateWithoutUserInput, TrialUncheckedCreateWithoutUserInput>
    connectOrCreate?: TrialCreateOrConnectWithoutUserInput
    connect?: TrialWhereUniqueInput
  }

  export type DailyStreakUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput> | DailyStreakCreateWithoutUserInput[] | DailyStreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutUserInput | DailyStreakCreateOrConnectWithoutUserInput[]
    createMany?: DailyStreakCreateManyUserInputEnvelope
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
  }

  export type AiLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AiLogCreateWithoutUserInput, AiLogUncheckedCreateWithoutUserInput> | AiLogCreateWithoutUserInput[] | AiLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiLogCreateOrConnectWithoutUserInput | AiLogCreateOrConnectWithoutUserInput[]
    createMany?: AiLogCreateManyUserInputEnvelope
    connect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
  }

  export type TokenUsageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput> | TokenUsageCreateWithoutUserInput[] | TokenUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenUsageCreateOrConnectWithoutUserInput | TokenUsageCreateOrConnectWithoutUserInput[]
    createMany?: TokenUsageCreateManyUserInputEnvelope
    connect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
  }

  export type SettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    connect?: SettingsWhereUniqueInput
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BuildLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<BuildLogCreateWithoutUserInput, BuildLogUncheckedCreateWithoutUserInput> | BuildLogCreateWithoutUserInput[] | BuildLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildLogCreateOrConnectWithoutUserInput | BuildLogCreateOrConnectWithoutUserInput[]
    upsert?: BuildLogUpsertWithWhereUniqueWithoutUserInput | BuildLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BuildLogCreateManyUserInputEnvelope
    set?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    disconnect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    delete?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    connect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    update?: BuildLogUpdateWithWhereUniqueWithoutUserInput | BuildLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BuildLogUpdateManyWithWhereWithoutUserInput | BuildLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BuildLogScalarWhereInput | BuildLogScalarWhereInput[]
  }

  export type TrialUpdateOneWithoutUserNestedInput = {
    create?: XOR<TrialCreateWithoutUserInput, TrialUncheckedCreateWithoutUserInput>
    connectOrCreate?: TrialCreateOrConnectWithoutUserInput
    upsert?: TrialUpsertWithoutUserInput
    disconnect?: TrialWhereInput | boolean
    delete?: TrialWhereInput | boolean
    connect?: TrialWhereUniqueInput
    update?: XOR<XOR<TrialUpdateToOneWithWhereWithoutUserInput, TrialUpdateWithoutUserInput>, TrialUncheckedUpdateWithoutUserInput>
  }

  export type DailyStreakUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput> | DailyStreakCreateWithoutUserInput[] | DailyStreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutUserInput | DailyStreakCreateOrConnectWithoutUserInput[]
    upsert?: DailyStreakUpsertWithWhereUniqueWithoutUserInput | DailyStreakUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyStreakCreateManyUserInputEnvelope
    set?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    disconnect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    delete?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    update?: DailyStreakUpdateWithWhereUniqueWithoutUserInput | DailyStreakUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyStreakUpdateManyWithWhereWithoutUserInput | DailyStreakUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyStreakScalarWhereInput | DailyStreakScalarWhereInput[]
  }

  export type AiLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiLogCreateWithoutUserInput, AiLogUncheckedCreateWithoutUserInput> | AiLogCreateWithoutUserInput[] | AiLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiLogCreateOrConnectWithoutUserInput | AiLogCreateOrConnectWithoutUserInput[]
    upsert?: AiLogUpsertWithWhereUniqueWithoutUserInput | AiLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiLogCreateManyUserInputEnvelope
    set?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    disconnect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    delete?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    connect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    update?: AiLogUpdateWithWhereUniqueWithoutUserInput | AiLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiLogUpdateManyWithWhereWithoutUserInput | AiLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiLogScalarWhereInput | AiLogScalarWhereInput[]
  }

  export type TokenUsageUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput> | TokenUsageCreateWithoutUserInput[] | TokenUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenUsageCreateOrConnectWithoutUserInput | TokenUsageCreateOrConnectWithoutUserInput[]
    upsert?: TokenUsageUpsertWithWhereUniqueWithoutUserInput | TokenUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenUsageCreateManyUserInputEnvelope
    set?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    disconnect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    delete?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    connect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    update?: TokenUsageUpdateWithWhereUniqueWithoutUserInput | TokenUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUsageUpdateManyWithWhereWithoutUserInput | TokenUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenUsageScalarWhereInput | TokenUsageScalarWhereInput[]
  }

  export type SettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    upsert?: SettingsUpsertWithoutUserInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutUserInput, SettingsUpdateWithoutUserInput>, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BuildLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BuildLogCreateWithoutUserInput, BuildLogUncheckedCreateWithoutUserInput> | BuildLogCreateWithoutUserInput[] | BuildLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildLogCreateOrConnectWithoutUserInput | BuildLogCreateOrConnectWithoutUserInput[]
    upsert?: BuildLogUpsertWithWhereUniqueWithoutUserInput | BuildLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BuildLogCreateManyUserInputEnvelope
    set?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    disconnect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    delete?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    connect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    update?: BuildLogUpdateWithWhereUniqueWithoutUserInput | BuildLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BuildLogUpdateManyWithWhereWithoutUserInput | BuildLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BuildLogScalarWhereInput | BuildLogScalarWhereInput[]
  }

  export type TrialUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TrialCreateWithoutUserInput, TrialUncheckedCreateWithoutUserInput>
    connectOrCreate?: TrialCreateOrConnectWithoutUserInput
    upsert?: TrialUpsertWithoutUserInput
    disconnect?: TrialWhereInput | boolean
    delete?: TrialWhereInput | boolean
    connect?: TrialWhereUniqueInput
    update?: XOR<XOR<TrialUpdateToOneWithWhereWithoutUserInput, TrialUpdateWithoutUserInput>, TrialUncheckedUpdateWithoutUserInput>
  }

  export type DailyStreakUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput> | DailyStreakCreateWithoutUserInput[] | DailyStreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutUserInput | DailyStreakCreateOrConnectWithoutUserInput[]
    upsert?: DailyStreakUpsertWithWhereUniqueWithoutUserInput | DailyStreakUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyStreakCreateManyUserInputEnvelope
    set?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    disconnect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    delete?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    update?: DailyStreakUpdateWithWhereUniqueWithoutUserInput | DailyStreakUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyStreakUpdateManyWithWhereWithoutUserInput | DailyStreakUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyStreakScalarWhereInput | DailyStreakScalarWhereInput[]
  }

  export type AiLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiLogCreateWithoutUserInput, AiLogUncheckedCreateWithoutUserInput> | AiLogCreateWithoutUserInput[] | AiLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiLogCreateOrConnectWithoutUserInput | AiLogCreateOrConnectWithoutUserInput[]
    upsert?: AiLogUpsertWithWhereUniqueWithoutUserInput | AiLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiLogCreateManyUserInputEnvelope
    set?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    disconnect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    delete?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    connect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    update?: AiLogUpdateWithWhereUniqueWithoutUserInput | AiLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiLogUpdateManyWithWhereWithoutUserInput | AiLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiLogScalarWhereInput | AiLogScalarWhereInput[]
  }

  export type TokenUsageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput> | TokenUsageCreateWithoutUserInput[] | TokenUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenUsageCreateOrConnectWithoutUserInput | TokenUsageCreateOrConnectWithoutUserInput[]
    upsert?: TokenUsageUpsertWithWhereUniqueWithoutUserInput | TokenUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenUsageCreateManyUserInputEnvelope
    set?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    disconnect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    delete?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    connect?: TokenUsageWhereUniqueInput | TokenUsageWhereUniqueInput[]
    update?: TokenUsageUpdateWithWhereUniqueWithoutUserInput | TokenUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUsageUpdateManyWithWhereWithoutUserInput | TokenUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenUsageScalarWhereInput | TokenUsageScalarWhereInput[]
  }

  export type SettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    upsert?: SettingsUpsertWithoutUserInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutUserInput, SettingsUpdateWithoutUserInput>, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type EnumAccessTierFieldUpdateOperationsInput = {
    set?: $Enums.AccessTier
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserCreateNestedOneWithoutTrialInput = {
    create?: XOR<UserCreateWithoutTrialInput, UserUncheckedCreateWithoutTrialInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrialInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTrialNestedInput = {
    create?: XOR<UserCreateWithoutTrialInput, UserUncheckedCreateWithoutTrialInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrialInput
    upsert?: UserUpsertWithoutTrialInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTrialInput, UserUpdateWithoutTrialInput>, UserUncheckedUpdateWithoutTrialInput>
  }

  export type UserCreateNestedOneWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    connect?: UserWhereUniqueInput
  }

  export type FeatureCreateNestedManyWithoutProductInput = {
    create?: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput> | FeatureCreateWithoutProductInput[] | FeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutProductInput | FeatureCreateOrConnectWithoutProductInput[]
    createMany?: FeatureCreateManyProductInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type BuildLogCreateNestedManyWithoutProductInput = {
    create?: XOR<BuildLogCreateWithoutProductInput, BuildLogUncheckedCreateWithoutProductInput> | BuildLogCreateWithoutProductInput[] | BuildLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BuildLogCreateOrConnectWithoutProductInput | BuildLogCreateOrConnectWithoutProductInput[]
    createMany?: BuildLogCreateManyProductInputEnvelope
    connect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
  }

  export type DailyStreakCreateNestedManyWithoutProductInput = {
    create?: XOR<DailyStreakCreateWithoutProductInput, DailyStreakUncheckedCreateWithoutProductInput> | DailyStreakCreateWithoutProductInput[] | DailyStreakUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutProductInput | DailyStreakCreateOrConnectWithoutProductInput[]
    createMany?: DailyStreakCreateManyProductInputEnvelope
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
  }

  export type AiLogCreateNestedManyWithoutProductInput = {
    create?: XOR<AiLogCreateWithoutProductInput, AiLogUncheckedCreateWithoutProductInput> | AiLogCreateWithoutProductInput[] | AiLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AiLogCreateOrConnectWithoutProductInput | AiLogCreateOrConnectWithoutProductInput[]
    createMany?: AiLogCreateManyProductInputEnvelope
    connect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
  }

  export type FeatureUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput> | FeatureCreateWithoutProductInput[] | FeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutProductInput | FeatureCreateOrConnectWithoutProductInput[]
    createMany?: FeatureCreateManyProductInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type BuildLogUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<BuildLogCreateWithoutProductInput, BuildLogUncheckedCreateWithoutProductInput> | BuildLogCreateWithoutProductInput[] | BuildLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BuildLogCreateOrConnectWithoutProductInput | BuildLogCreateOrConnectWithoutProductInput[]
    createMany?: BuildLogCreateManyProductInputEnvelope
    connect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
  }

  export type DailyStreakUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DailyStreakCreateWithoutProductInput, DailyStreakUncheckedCreateWithoutProductInput> | DailyStreakCreateWithoutProductInput[] | DailyStreakUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutProductInput | DailyStreakCreateOrConnectWithoutProductInput[]
    createMany?: DailyStreakCreateManyProductInputEnvelope
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
  }

  export type AiLogUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<AiLogCreateWithoutProductInput, AiLogUncheckedCreateWithoutProductInput> | AiLogCreateWithoutProductInput[] | AiLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AiLogCreateOrConnectWithoutProductInput | AiLogCreateOrConnectWithoutProductInput[]
    createMany?: AiLogCreateManyProductInputEnvelope
    connect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    upsert?: UserUpsertWithoutProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsInput, UserUpdateWithoutProductsInput>, UserUncheckedUpdateWithoutProductsInput>
  }

  export type FeatureUpdateManyWithoutProductNestedInput = {
    create?: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput> | FeatureCreateWithoutProductInput[] | FeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutProductInput | FeatureCreateOrConnectWithoutProductInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutProductInput | FeatureUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FeatureCreateManyProductInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutProductInput | FeatureUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutProductInput | FeatureUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type BuildLogUpdateManyWithoutProductNestedInput = {
    create?: XOR<BuildLogCreateWithoutProductInput, BuildLogUncheckedCreateWithoutProductInput> | BuildLogCreateWithoutProductInput[] | BuildLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BuildLogCreateOrConnectWithoutProductInput | BuildLogCreateOrConnectWithoutProductInput[]
    upsert?: BuildLogUpsertWithWhereUniqueWithoutProductInput | BuildLogUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BuildLogCreateManyProductInputEnvelope
    set?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    disconnect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    delete?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    connect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    update?: BuildLogUpdateWithWhereUniqueWithoutProductInput | BuildLogUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BuildLogUpdateManyWithWhereWithoutProductInput | BuildLogUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BuildLogScalarWhereInput | BuildLogScalarWhereInput[]
  }

  export type DailyStreakUpdateManyWithoutProductNestedInput = {
    create?: XOR<DailyStreakCreateWithoutProductInput, DailyStreakUncheckedCreateWithoutProductInput> | DailyStreakCreateWithoutProductInput[] | DailyStreakUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutProductInput | DailyStreakCreateOrConnectWithoutProductInput[]
    upsert?: DailyStreakUpsertWithWhereUniqueWithoutProductInput | DailyStreakUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DailyStreakCreateManyProductInputEnvelope
    set?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    disconnect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    delete?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    update?: DailyStreakUpdateWithWhereUniqueWithoutProductInput | DailyStreakUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DailyStreakUpdateManyWithWhereWithoutProductInput | DailyStreakUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DailyStreakScalarWhereInput | DailyStreakScalarWhereInput[]
  }

  export type AiLogUpdateManyWithoutProductNestedInput = {
    create?: XOR<AiLogCreateWithoutProductInput, AiLogUncheckedCreateWithoutProductInput> | AiLogCreateWithoutProductInput[] | AiLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AiLogCreateOrConnectWithoutProductInput | AiLogCreateOrConnectWithoutProductInput[]
    upsert?: AiLogUpsertWithWhereUniqueWithoutProductInput | AiLogUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: AiLogCreateManyProductInputEnvelope
    set?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    disconnect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    delete?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    connect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    update?: AiLogUpdateWithWhereUniqueWithoutProductInput | AiLogUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: AiLogUpdateManyWithWhereWithoutProductInput | AiLogUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: AiLogScalarWhereInput | AiLogScalarWhereInput[]
  }

  export type FeatureUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput> | FeatureCreateWithoutProductInput[] | FeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutProductInput | FeatureCreateOrConnectWithoutProductInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutProductInput | FeatureUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FeatureCreateManyProductInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutProductInput | FeatureUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutProductInput | FeatureUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type BuildLogUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<BuildLogCreateWithoutProductInput, BuildLogUncheckedCreateWithoutProductInput> | BuildLogCreateWithoutProductInput[] | BuildLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BuildLogCreateOrConnectWithoutProductInput | BuildLogCreateOrConnectWithoutProductInput[]
    upsert?: BuildLogUpsertWithWhereUniqueWithoutProductInput | BuildLogUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BuildLogCreateManyProductInputEnvelope
    set?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    disconnect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    delete?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    connect?: BuildLogWhereUniqueInput | BuildLogWhereUniqueInput[]
    update?: BuildLogUpdateWithWhereUniqueWithoutProductInput | BuildLogUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BuildLogUpdateManyWithWhereWithoutProductInput | BuildLogUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BuildLogScalarWhereInput | BuildLogScalarWhereInput[]
  }

  export type DailyStreakUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DailyStreakCreateWithoutProductInput, DailyStreakUncheckedCreateWithoutProductInput> | DailyStreakCreateWithoutProductInput[] | DailyStreakUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DailyStreakCreateOrConnectWithoutProductInput | DailyStreakCreateOrConnectWithoutProductInput[]
    upsert?: DailyStreakUpsertWithWhereUniqueWithoutProductInput | DailyStreakUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DailyStreakCreateManyProductInputEnvelope
    set?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    disconnect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    delete?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    connect?: DailyStreakWhereUniqueInput | DailyStreakWhereUniqueInput[]
    update?: DailyStreakUpdateWithWhereUniqueWithoutProductInput | DailyStreakUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DailyStreakUpdateManyWithWhereWithoutProductInput | DailyStreakUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DailyStreakScalarWhereInput | DailyStreakScalarWhereInput[]
  }

  export type AiLogUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<AiLogCreateWithoutProductInput, AiLogUncheckedCreateWithoutProductInput> | AiLogCreateWithoutProductInput[] | AiLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AiLogCreateOrConnectWithoutProductInput | AiLogCreateOrConnectWithoutProductInput[]
    upsert?: AiLogUpsertWithWhereUniqueWithoutProductInput | AiLogUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: AiLogCreateManyProductInputEnvelope
    set?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    disconnect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    delete?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    connect?: AiLogWhereUniqueInput | AiLogWhereUniqueInput[]
    update?: AiLogUpdateWithWhereUniqueWithoutProductInput | AiLogUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: AiLogUpdateManyWithWhereWithoutProductInput | AiLogUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: AiLogScalarWhereInput | AiLogScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutFeaturesInput = {
    create?: XOR<ProductCreateWithoutFeaturesInput, ProductUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFeaturesInput
    connect?: ProductWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutFeatureInput = {
    create?: XOR<TaskCreateWithoutFeatureInput, TaskUncheckedCreateWithoutFeatureInput> | TaskCreateWithoutFeatureInput[] | TaskUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutFeatureInput | TaskCreateOrConnectWithoutFeatureInput[]
    createMany?: TaskCreateManyFeatureInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutFeatureInput = {
    create?: XOR<TaskCreateWithoutFeatureInput, TaskUncheckedCreateWithoutFeatureInput> | TaskCreateWithoutFeatureInput[] | TaskUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutFeatureInput | TaskCreateOrConnectWithoutFeatureInput[]
    createMany?: TaskCreateManyFeatureInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutFeaturesNestedInput = {
    create?: XOR<ProductCreateWithoutFeaturesInput, ProductUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFeaturesInput
    upsert?: ProductUpsertWithoutFeaturesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutFeaturesInput, ProductUpdateWithoutFeaturesInput>, ProductUncheckedUpdateWithoutFeaturesInput>
  }

  export type TaskUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<TaskCreateWithoutFeatureInput, TaskUncheckedCreateWithoutFeatureInput> | TaskCreateWithoutFeatureInput[] | TaskUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutFeatureInput | TaskCreateOrConnectWithoutFeatureInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutFeatureInput | TaskUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: TaskCreateManyFeatureInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutFeatureInput | TaskUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutFeatureInput | TaskUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<TaskCreateWithoutFeatureInput, TaskUncheckedCreateWithoutFeatureInput> | TaskCreateWithoutFeatureInput[] | TaskUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutFeatureInput | TaskCreateOrConnectWithoutFeatureInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutFeatureInput | TaskUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: TaskCreateManyFeatureInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutFeatureInput | TaskUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutFeatureInput | TaskUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type FeatureCreateNestedOneWithoutTasksInput = {
    create?: XOR<FeatureCreateWithoutTasksInput, FeatureUncheckedCreateWithoutTasksInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutTasksInput
    connect?: FeatureWhereUniqueInput
  }

  export type DayTaskCreateNestedOneWithoutTaskInput = {
    create?: XOR<DayTaskCreateWithoutTaskInput, DayTaskUncheckedCreateWithoutTaskInput>
    connectOrCreate?: DayTaskCreateOrConnectWithoutTaskInput
    connect?: DayTaskWhereUniqueInput
  }

  export type DayTaskUncheckedCreateNestedOneWithoutTaskInput = {
    create?: XOR<DayTaskCreateWithoutTaskInput, DayTaskUncheckedCreateWithoutTaskInput>
    connectOrCreate?: DayTaskCreateOrConnectWithoutTaskInput
    connect?: DayTaskWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FeatureUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<FeatureCreateWithoutTasksInput, FeatureUncheckedCreateWithoutTasksInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutTasksInput
    upsert?: FeatureUpsertWithoutTasksInput
    connect?: FeatureWhereUniqueInput
    update?: XOR<XOR<FeatureUpdateToOneWithWhereWithoutTasksInput, FeatureUpdateWithoutTasksInput>, FeatureUncheckedUpdateWithoutTasksInput>
  }

  export type DayTaskUpdateOneWithoutTaskNestedInput = {
    create?: XOR<DayTaskCreateWithoutTaskInput, DayTaskUncheckedCreateWithoutTaskInput>
    connectOrCreate?: DayTaskCreateOrConnectWithoutTaskInput
    upsert?: DayTaskUpsertWithoutTaskInput
    disconnect?: DayTaskWhereInput | boolean
    delete?: DayTaskWhereInput | boolean
    connect?: DayTaskWhereUniqueInput
    update?: XOR<XOR<DayTaskUpdateToOneWithWhereWithoutTaskInput, DayTaskUpdateWithoutTaskInput>, DayTaskUncheckedUpdateWithoutTaskInput>
  }

  export type DayTaskUncheckedUpdateOneWithoutTaskNestedInput = {
    create?: XOR<DayTaskCreateWithoutTaskInput, DayTaskUncheckedCreateWithoutTaskInput>
    connectOrCreate?: DayTaskCreateOrConnectWithoutTaskInput
    upsert?: DayTaskUpsertWithoutTaskInput
    disconnect?: DayTaskWhereInput | boolean
    delete?: DayTaskWhereInput | boolean
    connect?: DayTaskWhereUniqueInput
    update?: XOR<XOR<DayTaskUpdateToOneWithWhereWithoutTaskInput, DayTaskUpdateWithoutTaskInput>, DayTaskUncheckedUpdateWithoutTaskInput>
  }

  export type TaskCreateNestedOneWithoutDayTaskInput = {
    create?: XOR<TaskCreateWithoutDayTaskInput, TaskUncheckedCreateWithoutDayTaskInput>
    connectOrCreate?: TaskCreateOrConnectWithoutDayTaskInput
    connect?: TaskWhereUniqueInput
  }

  export type BuildLogCreateNestedOneWithoutDayTaskInput = {
    create?: XOR<BuildLogCreateWithoutDayTaskInput, BuildLogUncheckedCreateWithoutDayTaskInput>
    connectOrCreate?: BuildLogCreateOrConnectWithoutDayTaskInput
    connect?: BuildLogWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutDayTaskNestedInput = {
    create?: XOR<TaskCreateWithoutDayTaskInput, TaskUncheckedCreateWithoutDayTaskInput>
    connectOrCreate?: TaskCreateOrConnectWithoutDayTaskInput
    upsert?: TaskUpsertWithoutDayTaskInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutDayTaskInput, TaskUpdateWithoutDayTaskInput>, TaskUncheckedUpdateWithoutDayTaskInput>
  }

  export type BuildLogUpdateOneWithoutDayTaskNestedInput = {
    create?: XOR<BuildLogCreateWithoutDayTaskInput, BuildLogUncheckedCreateWithoutDayTaskInput>
    connectOrCreate?: BuildLogCreateOrConnectWithoutDayTaskInput
    upsert?: BuildLogUpsertWithoutDayTaskInput
    disconnect?: BuildLogWhereInput | boolean
    delete?: BuildLogWhereInput | boolean
    connect?: BuildLogWhereUniqueInput
    update?: XOR<XOR<BuildLogUpdateToOneWithWhereWithoutDayTaskInput, BuildLogUpdateWithoutDayTaskInput>, BuildLogUncheckedUpdateWithoutDayTaskInput>
  }

  export type UserCreateNestedOneWithoutBuildLogsInput = {
    create?: XOR<UserCreateWithoutBuildLogsInput, UserUncheckedCreateWithoutBuildLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuildLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutBuildLogsInput = {
    create?: XOR<ProductCreateWithoutBuildLogsInput, ProductUncheckedCreateWithoutBuildLogsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBuildLogsInput
    connect?: ProductWhereUniqueInput
  }

  export type DayTaskCreateNestedManyWithoutBuildLogInput = {
    create?: XOR<DayTaskCreateWithoutBuildLogInput, DayTaskUncheckedCreateWithoutBuildLogInput> | DayTaskCreateWithoutBuildLogInput[] | DayTaskUncheckedCreateWithoutBuildLogInput[]
    connectOrCreate?: DayTaskCreateOrConnectWithoutBuildLogInput | DayTaskCreateOrConnectWithoutBuildLogInput[]
    createMany?: DayTaskCreateManyBuildLogInputEnvelope
    connect?: DayTaskWhereUniqueInput | DayTaskWhereUniqueInput[]
  }

  export type DayTaskUncheckedCreateNestedManyWithoutBuildLogInput = {
    create?: XOR<DayTaskCreateWithoutBuildLogInput, DayTaskUncheckedCreateWithoutBuildLogInput> | DayTaskCreateWithoutBuildLogInput[] | DayTaskUncheckedCreateWithoutBuildLogInput[]
    connectOrCreate?: DayTaskCreateOrConnectWithoutBuildLogInput | DayTaskCreateOrConnectWithoutBuildLogInput[]
    createMany?: DayTaskCreateManyBuildLogInputEnvelope
    connect?: DayTaskWhereUniqueInput | DayTaskWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBuildLogsNestedInput = {
    create?: XOR<UserCreateWithoutBuildLogsInput, UserUncheckedCreateWithoutBuildLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuildLogsInput
    upsert?: UserUpsertWithoutBuildLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBuildLogsInput, UserUpdateWithoutBuildLogsInput>, UserUncheckedUpdateWithoutBuildLogsInput>
  }

  export type ProductUpdateOneRequiredWithoutBuildLogsNestedInput = {
    create?: XOR<ProductCreateWithoutBuildLogsInput, ProductUncheckedCreateWithoutBuildLogsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBuildLogsInput
    upsert?: ProductUpsertWithoutBuildLogsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBuildLogsInput, ProductUpdateWithoutBuildLogsInput>, ProductUncheckedUpdateWithoutBuildLogsInput>
  }

  export type DayTaskUpdateManyWithoutBuildLogNestedInput = {
    create?: XOR<DayTaskCreateWithoutBuildLogInput, DayTaskUncheckedCreateWithoutBuildLogInput> | DayTaskCreateWithoutBuildLogInput[] | DayTaskUncheckedCreateWithoutBuildLogInput[]
    connectOrCreate?: DayTaskCreateOrConnectWithoutBuildLogInput | DayTaskCreateOrConnectWithoutBuildLogInput[]
    upsert?: DayTaskUpsertWithWhereUniqueWithoutBuildLogInput | DayTaskUpsertWithWhereUniqueWithoutBuildLogInput[]
    createMany?: DayTaskCreateManyBuildLogInputEnvelope
    set?: DayTaskWhereUniqueInput | DayTaskWhereUniqueInput[]
    disconnect?: DayTaskWhereUniqueInput | DayTaskWhereUniqueInput[]
    delete?: DayTaskWhereUniqueInput | DayTaskWhereUniqueInput[]
    connect?: DayTaskWhereUniqueInput | DayTaskWhereUniqueInput[]
    update?: DayTaskUpdateWithWhereUniqueWithoutBuildLogInput | DayTaskUpdateWithWhereUniqueWithoutBuildLogInput[]
    updateMany?: DayTaskUpdateManyWithWhereWithoutBuildLogInput | DayTaskUpdateManyWithWhereWithoutBuildLogInput[]
    deleteMany?: DayTaskScalarWhereInput | DayTaskScalarWhereInput[]
  }

  export type DayTaskUncheckedUpdateManyWithoutBuildLogNestedInput = {
    create?: XOR<DayTaskCreateWithoutBuildLogInput, DayTaskUncheckedCreateWithoutBuildLogInput> | DayTaskCreateWithoutBuildLogInput[] | DayTaskUncheckedCreateWithoutBuildLogInput[]
    connectOrCreate?: DayTaskCreateOrConnectWithoutBuildLogInput | DayTaskCreateOrConnectWithoutBuildLogInput[]
    upsert?: DayTaskUpsertWithWhereUniqueWithoutBuildLogInput | DayTaskUpsertWithWhereUniqueWithoutBuildLogInput[]
    createMany?: DayTaskCreateManyBuildLogInputEnvelope
    set?: DayTaskWhereUniqueInput | DayTaskWhereUniqueInput[]
    disconnect?: DayTaskWhereUniqueInput | DayTaskWhereUniqueInput[]
    delete?: DayTaskWhereUniqueInput | DayTaskWhereUniqueInput[]
    connect?: DayTaskWhereUniqueInput | DayTaskWhereUniqueInput[]
    update?: DayTaskUpdateWithWhereUniqueWithoutBuildLogInput | DayTaskUpdateWithWhereUniqueWithoutBuildLogInput[]
    updateMany?: DayTaskUpdateManyWithWhereWithoutBuildLogInput | DayTaskUpdateManyWithWhereWithoutBuildLogInput[]
    deleteMany?: DayTaskScalarWhereInput | DayTaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDailyStreakInput = {
    create?: XOR<UserCreateWithoutDailyStreakInput, UserUncheckedCreateWithoutDailyStreakInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyStreakInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutDailyStreakInput = {
    create?: XOR<ProductCreateWithoutDailyStreakInput, ProductUncheckedCreateWithoutDailyStreakInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDailyStreakInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyStreakNestedInput = {
    create?: XOR<UserCreateWithoutDailyStreakInput, UserUncheckedCreateWithoutDailyStreakInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyStreakInput
    upsert?: UserUpsertWithoutDailyStreakInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyStreakInput, UserUpdateWithoutDailyStreakInput>, UserUncheckedUpdateWithoutDailyStreakInput>
  }

  export type ProductUpdateOneRequiredWithoutDailyStreakNestedInput = {
    create?: XOR<ProductCreateWithoutDailyStreakInput, ProductUncheckedCreateWithoutDailyStreakInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDailyStreakInput
    upsert?: ProductUpsertWithoutDailyStreakInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDailyStreakInput, ProductUpdateWithoutDailyStreakInput>, ProductUncheckedUpdateWithoutDailyStreakInput>
  }

  export type UserCreateNestedOneWithoutAiLogsInput = {
    create?: XOR<UserCreateWithoutAiLogsInput, UserUncheckedCreateWithoutAiLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutAiLogsInput = {
    create?: XOR<ProductCreateWithoutAiLogsInput, ProductUncheckedCreateWithoutAiLogsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAiLogsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAiLogsNestedInput = {
    create?: XOR<UserCreateWithoutAiLogsInput, UserUncheckedCreateWithoutAiLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiLogsInput
    upsert?: UserUpsertWithoutAiLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiLogsInput, UserUpdateWithoutAiLogsInput>, UserUncheckedUpdateWithoutAiLogsInput>
  }

  export type ProductUpdateOneRequiredWithoutAiLogsNestedInput = {
    create?: XOR<ProductCreateWithoutAiLogsInput, ProductUncheckedCreateWithoutAiLogsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAiLogsInput
    upsert?: ProductUpsertWithoutAiLogsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAiLogsInput, ProductUpdateWithoutAiLogsInput>, ProductUncheckedUpdateWithoutAiLogsInput>
  }

  export type UserCreateNestedOneWithoutTokenUsagesInput = {
    create?: XOR<UserCreateWithoutTokenUsagesInput, UserUncheckedCreateWithoutTokenUsagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenUsagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokenUsagesNestedInput = {
    create?: XOR<UserCreateWithoutTokenUsagesInput, UserUncheckedCreateWithoutTokenUsagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenUsagesInput
    upsert?: UserUpsertWithoutTokenUsagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenUsagesInput, UserUpdateWithoutTokenUsagesInput>, UserUncheckedUpdateWithoutTokenUsagesInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAccessTierFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessTier | EnumAccessTierFieldRefInput<$PrismaModel>
    in?: $Enums.AccessTier[] | ListEnumAccessTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessTier[] | ListEnumAccessTierFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTierFilter<$PrismaModel> | $Enums.AccessTier
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAccessTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessTier | EnumAccessTierFieldRefInput<$PrismaModel>
    in?: $Enums.AccessTier[] | ListEnumAccessTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessTier[] | ListEnumAccessTierFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTierWithAggregatesFilter<$PrismaModel> | $Enums.AccessTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessTierFilter<$PrismaModel>
    _max?: NestedEnumAccessTierFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProductCreateWithoutUserInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    features?: FeatureCreateNestedManyWithoutProductInput
    buildLogs?: BuildLogCreateNestedManyWithoutProductInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutProductInput
    aiLogs?: AiLogCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    features?: FeatureUncheckedCreateNestedManyWithoutProductInput
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutProductInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutProductInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BuildLogCreateWithoutUserInput = {
    id?: string
    logDate: Date | string
    tweet?: string | null
    dayIndex?: number
    summary: string
    generatedAt?: Date | string
    product: ProductCreateNestedOneWithoutBuildLogsInput
    DayTask?: DayTaskCreateNestedManyWithoutBuildLogInput
  }

  export type BuildLogUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    logDate: Date | string
    tweet?: string | null
    dayIndex?: number
    summary: string
    generatedAt?: Date | string
    DayTask?: DayTaskUncheckedCreateNestedManyWithoutBuildLogInput
  }

  export type BuildLogCreateOrConnectWithoutUserInput = {
    where: BuildLogWhereUniqueInput
    create: XOR<BuildLogCreateWithoutUserInput, BuildLogUncheckedCreateWithoutUserInput>
  }

  export type BuildLogCreateManyUserInputEnvelope = {
    data: BuildLogCreateManyUserInput | BuildLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TrialCreateWithoutUserInput = {
    id?: string
    plan?: $Enums.AccessTier
    startDate: Date | string
    endDate: Date | string
    expired?: boolean
  }

  export type TrialUncheckedCreateWithoutUserInput = {
    id?: string
    plan?: $Enums.AccessTier
    startDate: Date | string
    endDate: Date | string
    expired?: boolean
  }

  export type TrialCreateOrConnectWithoutUserInput = {
    where: TrialWhereUniqueInput
    create: XOR<TrialCreateWithoutUserInput, TrialUncheckedCreateWithoutUserInput>
  }

  export type DailyStreakCreateWithoutUserInput = {
    id?: string
    date: Date | string
    hasBuildLog?: boolean
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutDailyStreakInput
  }

  export type DailyStreakUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    date: Date | string
    hasBuildLog?: boolean
    createdAt?: Date | string
  }

  export type DailyStreakCreateOrConnectWithoutUserInput = {
    where: DailyStreakWhereUniqueInput
    create: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput>
  }

  export type DailyStreakCreateManyUserInputEnvelope = {
    data: DailyStreakCreateManyUserInput | DailyStreakCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AiLogCreateWithoutUserInput = {
    id?: string
    ai_model: string
    type: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutAiLogsInput
  }

  export type AiLogUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    ai_model: string
    type: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AiLogCreateOrConnectWithoutUserInput = {
    where: AiLogWhereUniqueInput
    create: XOR<AiLogCreateWithoutUserInput, AiLogUncheckedCreateWithoutUserInput>
  }

  export type AiLogCreateManyUserInputEnvelope = {
    data: AiLogCreateManyUserInput | AiLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenUsageCreateWithoutUserInput = {
    id?: string
    purpose: string
    tokens: number
    createdAt?: Date | string
  }

  export type TokenUsageUncheckedCreateWithoutUserInput = {
    id?: string
    purpose: string
    tokens: number
    createdAt?: Date | string
  }

  export type TokenUsageCreateOrConnectWithoutUserInput = {
    where: TokenUsageWhereUniqueInput
    create: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput>
  }

  export type TokenUsageCreateManyUserInputEnvelope = {
    data: TokenUsageCreateManyUserInput | TokenUsageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SettingsCreateWithoutUserInput = {
    id?: string
    dailyHours?: number
    deadlineDays?: number
    aiModel?: string
    emailNudges?: boolean
    isPublic?: boolean
    slug?: string | null
    bio?: string | null
    twitter?: string | null
  }

  export type SettingsUncheckedCreateWithoutUserInput = {
    id?: string
    dailyHours?: number
    deadlineDays?: number
    aiModel?: string
    emailNudges?: boolean
    isPublic?: boolean
    slug?: string | null
    bio?: string | null
    twitter?: string | null
  }

  export type SettingsCreateOrConnectWithoutUserInput = {
    where: SettingsWhereUniqueInput
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    planName: string
    currentPeriodEnd: Date | string
    trialEndsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    status: string
    planName: string
    currentPeriodEnd: Date | string
    trialEndsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    problemStatement?: StringFilter<"Product"> | string
    targetAudience?: StringFilter<"Product"> | string
    userGoals?: StringFilter<"Product"> | string
    uniqueValueProp?: StringFilter<"Product"> | string
    isMvpGenerated?: BoolFilter<"Product"> | boolean
    isRoadmapGenerated?: BoolFilter<"Product"> | boolean
    currentStreak?: IntFilter<"Product"> | number
    AllTimeBestStreak?: IntFilter<"Product"> | number
    active?: BoolFilter<"Product"> | boolean
    techStack?: StringNullableFilter<"Product"> | string | null
    inspirationApps?: StringNullableFilter<"Product"> | string | null
    initialFeatures?: StringNullableFilter<"Product"> | string | null
    startDate?: DateTimeFilter<"Product"> | Date | string
    deadline?: DateTimeFilter<"Product"> | Date | string
    dailyCommitmentHrs?: FloatFilter<"Product"> | number
    userId?: StringFilter<"Product"> | string
    mvpSummary?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type BuildLogUpsertWithWhereUniqueWithoutUserInput = {
    where: BuildLogWhereUniqueInput
    update: XOR<BuildLogUpdateWithoutUserInput, BuildLogUncheckedUpdateWithoutUserInput>
    create: XOR<BuildLogCreateWithoutUserInput, BuildLogUncheckedCreateWithoutUserInput>
  }

  export type BuildLogUpdateWithWhereUniqueWithoutUserInput = {
    where: BuildLogWhereUniqueInput
    data: XOR<BuildLogUpdateWithoutUserInput, BuildLogUncheckedUpdateWithoutUserInput>
  }

  export type BuildLogUpdateManyWithWhereWithoutUserInput = {
    where: BuildLogScalarWhereInput
    data: XOR<BuildLogUpdateManyMutationInput, BuildLogUncheckedUpdateManyWithoutUserInput>
  }

  export type BuildLogScalarWhereInput = {
    AND?: BuildLogScalarWhereInput | BuildLogScalarWhereInput[]
    OR?: BuildLogScalarWhereInput[]
    NOT?: BuildLogScalarWhereInput | BuildLogScalarWhereInput[]
    id?: StringFilter<"BuildLog"> | string
    userId?: StringFilter<"BuildLog"> | string
    productId?: StringFilter<"BuildLog"> | string
    logDate?: DateTimeFilter<"BuildLog"> | Date | string
    tweet?: StringNullableFilter<"BuildLog"> | string | null
    dayIndex?: IntFilter<"BuildLog"> | number
    summary?: StringFilter<"BuildLog"> | string
    generatedAt?: DateTimeFilter<"BuildLog"> | Date | string
  }

  export type TrialUpsertWithoutUserInput = {
    update: XOR<TrialUpdateWithoutUserInput, TrialUncheckedUpdateWithoutUserInput>
    create: XOR<TrialCreateWithoutUserInput, TrialUncheckedCreateWithoutUserInput>
    where?: TrialWhereInput
  }

  export type TrialUpdateToOneWithWhereWithoutUserInput = {
    where?: TrialWhereInput
    data: XOR<TrialUpdateWithoutUserInput, TrialUncheckedUpdateWithoutUserInput>
  }

  export type TrialUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumAccessTierFieldUpdateOperationsInput | $Enums.AccessTier
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrialUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumAccessTierFieldUpdateOperationsInput | $Enums.AccessTier
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyStreakUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyStreakWhereUniqueInput
    update: XOR<DailyStreakUpdateWithoutUserInput, DailyStreakUncheckedUpdateWithoutUserInput>
    create: XOR<DailyStreakCreateWithoutUserInput, DailyStreakUncheckedCreateWithoutUserInput>
  }

  export type DailyStreakUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyStreakWhereUniqueInput
    data: XOR<DailyStreakUpdateWithoutUserInput, DailyStreakUncheckedUpdateWithoutUserInput>
  }

  export type DailyStreakUpdateManyWithWhereWithoutUserInput = {
    where: DailyStreakScalarWhereInput
    data: XOR<DailyStreakUpdateManyMutationInput, DailyStreakUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyStreakScalarWhereInput = {
    AND?: DailyStreakScalarWhereInput | DailyStreakScalarWhereInput[]
    OR?: DailyStreakScalarWhereInput[]
    NOT?: DailyStreakScalarWhereInput | DailyStreakScalarWhereInput[]
    id?: StringFilter<"DailyStreak"> | string
    userId?: StringFilter<"DailyStreak"> | string
    productId?: StringFilter<"DailyStreak"> | string
    date?: DateTimeFilter<"DailyStreak"> | Date | string
    hasBuildLog?: BoolFilter<"DailyStreak"> | boolean
    createdAt?: DateTimeFilter<"DailyStreak"> | Date | string
  }

  export type AiLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AiLogWhereUniqueInput
    update: XOR<AiLogUpdateWithoutUserInput, AiLogUncheckedUpdateWithoutUserInput>
    create: XOR<AiLogCreateWithoutUserInput, AiLogUncheckedCreateWithoutUserInput>
  }

  export type AiLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AiLogWhereUniqueInput
    data: XOR<AiLogUpdateWithoutUserInput, AiLogUncheckedUpdateWithoutUserInput>
  }

  export type AiLogUpdateManyWithWhereWithoutUserInput = {
    where: AiLogScalarWhereInput
    data: XOR<AiLogUpdateManyMutationInput, AiLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AiLogScalarWhereInput = {
    AND?: AiLogScalarWhereInput | AiLogScalarWhereInput[]
    OR?: AiLogScalarWhereInput[]
    NOT?: AiLogScalarWhereInput | AiLogScalarWhereInput[]
    id?: StringFilter<"AiLog"> | string
    userId?: StringFilter<"AiLog"> | string
    productId?: StringFilter<"AiLog"> | string
    ai_model?: StringFilter<"AiLog"> | string
    type?: StringFilter<"AiLog"> | string
    input?: JsonFilter<"AiLog">
    output?: JsonFilter<"AiLog">
    createdAt?: DateTimeFilter<"AiLog"> | Date | string
  }

  export type TokenUsageUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenUsageWhereUniqueInput
    update: XOR<TokenUsageUpdateWithoutUserInput, TokenUsageUncheckedUpdateWithoutUserInput>
    create: XOR<TokenUsageCreateWithoutUserInput, TokenUsageUncheckedCreateWithoutUserInput>
  }

  export type TokenUsageUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenUsageWhereUniqueInput
    data: XOR<TokenUsageUpdateWithoutUserInput, TokenUsageUncheckedUpdateWithoutUserInput>
  }

  export type TokenUsageUpdateManyWithWhereWithoutUserInput = {
    where: TokenUsageScalarWhereInput
    data: XOR<TokenUsageUpdateManyMutationInput, TokenUsageUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenUsageScalarWhereInput = {
    AND?: TokenUsageScalarWhereInput | TokenUsageScalarWhereInput[]
    OR?: TokenUsageScalarWhereInput[]
    NOT?: TokenUsageScalarWhereInput | TokenUsageScalarWhereInput[]
    id?: StringFilter<"TokenUsage"> | string
    userId?: StringFilter<"TokenUsage"> | string
    purpose?: StringFilter<"TokenUsage"> | string
    tokens?: IntFilter<"TokenUsage"> | number
    createdAt?: DateTimeFilter<"TokenUsage"> | Date | string
  }

  export type SettingsUpsertWithoutUserInput = {
    update: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    where?: SettingsWhereInput
  }

  export type SettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: SettingsWhereInput
    data: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type SettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyHours?: FloatFieldUpdateOperationsInput | number
    deadlineDays?: IntFieldUpdateOperationsInput | number
    aiModel?: StringFieldUpdateOperationsInput | string
    emailNudges?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyHours?: FloatFieldUpdateOperationsInput | number
    deadlineDays?: IntFieldUpdateOperationsInput | number
    aiModel?: StringFieldUpdateOperationsInput | string
    emailNudges?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTrialInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogCreateNestedManyWithoutUserInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutUserInput
    aiLogs?: AiLogCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTrialInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutUserInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTrialInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrialInput, UserUncheckedCreateWithoutTrialInput>
  }

  export type UserUpsertWithoutTrialInput = {
    update: XOR<UserUpdateWithoutTrialInput, UserUncheckedUpdateWithoutTrialInput>
    create: XOR<UserCreateWithoutTrialInput, UserUncheckedCreateWithoutTrialInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTrialInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTrialInput, UserUncheckedUpdateWithoutTrialInput>
  }

  export type UserUpdateWithoutTrialInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUpdateManyWithoutUserNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTrialInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUncheckedUpdateManyWithoutUserNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutProductsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    buildLogs?: BuildLogCreateNestedManyWithoutUserInput
    trial?: TrialCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutUserInput
    aiLogs?: AiLogCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutUserInput
    trial?: TrialUncheckedCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
  }

  export type FeatureCreateWithoutProductInput = {
    id?: string
    name: string
    description: string
    rank: number
    tasks?: TaskCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    description: string
    rank: number
    tasks?: TaskUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutProductInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput>
  }

  export type FeatureCreateManyProductInputEnvelope = {
    data: FeatureCreateManyProductInput | FeatureCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BuildLogCreateWithoutProductInput = {
    id?: string
    logDate: Date | string
    tweet?: string | null
    dayIndex?: number
    summary: string
    generatedAt?: Date | string
    user: UserCreateNestedOneWithoutBuildLogsInput
    DayTask?: DayTaskCreateNestedManyWithoutBuildLogInput
  }

  export type BuildLogUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    logDate: Date | string
    tweet?: string | null
    dayIndex?: number
    summary: string
    generatedAt?: Date | string
    DayTask?: DayTaskUncheckedCreateNestedManyWithoutBuildLogInput
  }

  export type BuildLogCreateOrConnectWithoutProductInput = {
    where: BuildLogWhereUniqueInput
    create: XOR<BuildLogCreateWithoutProductInput, BuildLogUncheckedCreateWithoutProductInput>
  }

  export type BuildLogCreateManyProductInputEnvelope = {
    data: BuildLogCreateManyProductInput | BuildLogCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type DailyStreakCreateWithoutProductInput = {
    id?: string
    date: Date | string
    hasBuildLog?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDailyStreakInput
  }

  export type DailyStreakUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    date: Date | string
    hasBuildLog?: boolean
    createdAt?: Date | string
  }

  export type DailyStreakCreateOrConnectWithoutProductInput = {
    where: DailyStreakWhereUniqueInput
    create: XOR<DailyStreakCreateWithoutProductInput, DailyStreakUncheckedCreateWithoutProductInput>
  }

  export type DailyStreakCreateManyProductInputEnvelope = {
    data: DailyStreakCreateManyProductInput | DailyStreakCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type AiLogCreateWithoutProductInput = {
    id?: string
    ai_model: string
    type: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAiLogsInput
  }

  export type AiLogUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    ai_model: string
    type: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AiLogCreateOrConnectWithoutProductInput = {
    where: AiLogWhereUniqueInput
    create: XOR<AiLogCreateWithoutProductInput, AiLogUncheckedCreateWithoutProductInput>
  }

  export type AiLogCreateManyProductInputEnvelope = {
    data: AiLogCreateManyProductInput | AiLogCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProductsInput = {
    update: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildLogs?: BuildLogUpdateManyWithoutUserNestedInput
    trial?: TrialUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildLogs?: BuildLogUncheckedUpdateManyWithoutUserNestedInput
    trial?: TrialUncheckedUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type FeatureUpsertWithWhereUniqueWithoutProductInput = {
    where: FeatureWhereUniqueInput
    update: XOR<FeatureUpdateWithoutProductInput, FeatureUncheckedUpdateWithoutProductInput>
    create: XOR<FeatureCreateWithoutProductInput, FeatureUncheckedCreateWithoutProductInput>
  }

  export type FeatureUpdateWithWhereUniqueWithoutProductInput = {
    where: FeatureWhereUniqueInput
    data: XOR<FeatureUpdateWithoutProductInput, FeatureUncheckedUpdateWithoutProductInput>
  }

  export type FeatureUpdateManyWithWhereWithoutProductInput = {
    where: FeatureScalarWhereInput
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyWithoutProductInput>
  }

  export type FeatureScalarWhereInput = {
    AND?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    OR?: FeatureScalarWhereInput[]
    NOT?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    id?: StringFilter<"Feature"> | string
    name?: StringFilter<"Feature"> | string
    description?: StringFilter<"Feature"> | string
    rank?: IntFilter<"Feature"> | number
    productId?: StringFilter<"Feature"> | string
  }

  export type BuildLogUpsertWithWhereUniqueWithoutProductInput = {
    where: BuildLogWhereUniqueInput
    update: XOR<BuildLogUpdateWithoutProductInput, BuildLogUncheckedUpdateWithoutProductInput>
    create: XOR<BuildLogCreateWithoutProductInput, BuildLogUncheckedCreateWithoutProductInput>
  }

  export type BuildLogUpdateWithWhereUniqueWithoutProductInput = {
    where: BuildLogWhereUniqueInput
    data: XOR<BuildLogUpdateWithoutProductInput, BuildLogUncheckedUpdateWithoutProductInput>
  }

  export type BuildLogUpdateManyWithWhereWithoutProductInput = {
    where: BuildLogScalarWhereInput
    data: XOR<BuildLogUpdateManyMutationInput, BuildLogUncheckedUpdateManyWithoutProductInput>
  }

  export type DailyStreakUpsertWithWhereUniqueWithoutProductInput = {
    where: DailyStreakWhereUniqueInput
    update: XOR<DailyStreakUpdateWithoutProductInput, DailyStreakUncheckedUpdateWithoutProductInput>
    create: XOR<DailyStreakCreateWithoutProductInput, DailyStreakUncheckedCreateWithoutProductInput>
  }

  export type DailyStreakUpdateWithWhereUniqueWithoutProductInput = {
    where: DailyStreakWhereUniqueInput
    data: XOR<DailyStreakUpdateWithoutProductInput, DailyStreakUncheckedUpdateWithoutProductInput>
  }

  export type DailyStreakUpdateManyWithWhereWithoutProductInput = {
    where: DailyStreakScalarWhereInput
    data: XOR<DailyStreakUpdateManyMutationInput, DailyStreakUncheckedUpdateManyWithoutProductInput>
  }

  export type AiLogUpsertWithWhereUniqueWithoutProductInput = {
    where: AiLogWhereUniqueInput
    update: XOR<AiLogUpdateWithoutProductInput, AiLogUncheckedUpdateWithoutProductInput>
    create: XOR<AiLogCreateWithoutProductInput, AiLogUncheckedCreateWithoutProductInput>
  }

  export type AiLogUpdateWithWhereUniqueWithoutProductInput = {
    where: AiLogWhereUniqueInput
    data: XOR<AiLogUpdateWithoutProductInput, AiLogUncheckedUpdateWithoutProductInput>
  }

  export type AiLogUpdateManyWithWhereWithoutProductInput = {
    where: AiLogScalarWhereInput
    data: XOR<AiLogUpdateManyMutationInput, AiLogUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutFeaturesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductsInput
    buildLogs?: BuildLogCreateNestedManyWithoutProductInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutProductInput
    aiLogs?: AiLogCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFeaturesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    userId: string
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutProductInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutProductInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFeaturesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFeaturesInput, ProductUncheckedCreateWithoutFeaturesInput>
  }

  export type TaskCreateWithoutFeatureInput = {
    id?: string
    title: string
    estimatedHours?: number | null
    status?: $Enums.TaskStatus
    dayNumber?: number | null
    completed?: boolean
    dayTask?: DayTaskCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutFeatureInput = {
    id?: string
    title: string
    estimatedHours?: number | null
    status?: $Enums.TaskStatus
    dayNumber?: number | null
    completed?: boolean
    dayTask?: DayTaskUncheckedCreateNestedOneWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutFeatureInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutFeatureInput, TaskUncheckedCreateWithoutFeatureInput>
  }

  export type TaskCreateManyFeatureInputEnvelope = {
    data: TaskCreateManyFeatureInput | TaskCreateManyFeatureInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutFeaturesInput = {
    update: XOR<ProductUpdateWithoutFeaturesInput, ProductUncheckedUpdateWithoutFeaturesInput>
    create: XOR<ProductCreateWithoutFeaturesInput, ProductUncheckedCreateWithoutFeaturesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutFeaturesInput, ProductUncheckedUpdateWithoutFeaturesInput>
  }

  export type ProductUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
    buildLogs?: BuildLogUpdateManyWithoutProductNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutProductNestedInput
    aiLogs?: AiLogUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildLogs?: BuildLogUncheckedUpdateManyWithoutProductNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutProductNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutProductNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutFeatureInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutFeatureInput, TaskUncheckedUpdateWithoutFeatureInput>
    create: XOR<TaskCreateWithoutFeatureInput, TaskUncheckedCreateWithoutFeatureInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutFeatureInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutFeatureInput, TaskUncheckedUpdateWithoutFeatureInput>
  }

  export type TaskUpdateManyWithWhereWithoutFeatureInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutFeatureInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    estimatedHours?: FloatNullableFilter<"Task"> | number | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    dayNumber?: IntNullableFilter<"Task"> | number | null
    completed?: BoolFilter<"Task"> | boolean
    featureId?: StringFilter<"Task"> | string
  }

  export type FeatureCreateWithoutTasksInput = {
    id?: string
    name: string
    description: string
    rank: number
    product: ProductCreateNestedOneWithoutFeaturesInput
  }

  export type FeatureUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description: string
    rank: number
    productId: string
  }

  export type FeatureCreateOrConnectWithoutTasksInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutTasksInput, FeatureUncheckedCreateWithoutTasksInput>
  }

  export type DayTaskCreateWithoutTaskInput = {
    id?: string
    dayIndex: number
    dueDate: Date | string
    completedAt?: Date | string | null
    category: string
    description: string
    status?: string
    milestoneGoal?: string | null
    shipCheck?: string | null
    buildLog?: BuildLogCreateNestedOneWithoutDayTaskInput
  }

  export type DayTaskUncheckedCreateWithoutTaskInput = {
    id?: string
    dayIndex: number
    dueDate: Date | string
    completedAt?: Date | string | null
    category: string
    description: string
    status?: string
    milestoneGoal?: string | null
    shipCheck?: string | null
    buildLogId?: string | null
  }

  export type DayTaskCreateOrConnectWithoutTaskInput = {
    where: DayTaskWhereUniqueInput
    create: XOR<DayTaskCreateWithoutTaskInput, DayTaskUncheckedCreateWithoutTaskInput>
  }

  export type FeatureUpsertWithoutTasksInput = {
    update: XOR<FeatureUpdateWithoutTasksInput, FeatureUncheckedUpdateWithoutTasksInput>
    create: XOR<FeatureCreateWithoutTasksInput, FeatureUncheckedCreateWithoutTasksInput>
    where?: FeatureWhereInput
  }

  export type FeatureUpdateToOneWithWhereWithoutTasksInput = {
    where?: FeatureWhereInput
    data: XOR<FeatureUpdateWithoutTasksInput, FeatureUncheckedUpdateWithoutTasksInput>
  }

  export type FeatureUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutFeaturesNestedInput
  }

  export type FeatureUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type DayTaskUpsertWithoutTaskInput = {
    update: XOR<DayTaskUpdateWithoutTaskInput, DayTaskUncheckedUpdateWithoutTaskInput>
    create: XOR<DayTaskCreateWithoutTaskInput, DayTaskUncheckedCreateWithoutTaskInput>
    where?: DayTaskWhereInput
  }

  export type DayTaskUpdateToOneWithWhereWithoutTaskInput = {
    where?: DayTaskWhereInput
    data: XOR<DayTaskUpdateWithoutTaskInput, DayTaskUncheckedUpdateWithoutTaskInput>
  }

  export type DayTaskUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    milestoneGoal?: NullableStringFieldUpdateOperationsInput | string | null
    shipCheck?: NullableStringFieldUpdateOperationsInput | string | null
    buildLog?: BuildLogUpdateOneWithoutDayTaskNestedInput
  }

  export type DayTaskUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    milestoneGoal?: NullableStringFieldUpdateOperationsInput | string | null
    shipCheck?: NullableStringFieldUpdateOperationsInput | string | null
    buildLogId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateWithoutDayTaskInput = {
    id?: string
    title: string
    estimatedHours?: number | null
    status?: $Enums.TaskStatus
    dayNumber?: number | null
    completed?: boolean
    feature: FeatureCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutDayTaskInput = {
    id?: string
    title: string
    estimatedHours?: number | null
    status?: $Enums.TaskStatus
    dayNumber?: number | null
    completed?: boolean
    featureId: string
  }

  export type TaskCreateOrConnectWithoutDayTaskInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutDayTaskInput, TaskUncheckedCreateWithoutDayTaskInput>
  }

  export type BuildLogCreateWithoutDayTaskInput = {
    id?: string
    logDate: Date | string
    tweet?: string | null
    dayIndex?: number
    summary: string
    generatedAt?: Date | string
    user: UserCreateNestedOneWithoutBuildLogsInput
    product: ProductCreateNestedOneWithoutBuildLogsInput
  }

  export type BuildLogUncheckedCreateWithoutDayTaskInput = {
    id?: string
    userId: string
    productId: string
    logDate: Date | string
    tweet?: string | null
    dayIndex?: number
    summary: string
    generatedAt?: Date | string
  }

  export type BuildLogCreateOrConnectWithoutDayTaskInput = {
    where: BuildLogWhereUniqueInput
    create: XOR<BuildLogCreateWithoutDayTaskInput, BuildLogUncheckedCreateWithoutDayTaskInput>
  }

  export type TaskUpsertWithoutDayTaskInput = {
    update: XOR<TaskUpdateWithoutDayTaskInput, TaskUncheckedUpdateWithoutDayTaskInput>
    create: XOR<TaskCreateWithoutDayTaskInput, TaskUncheckedCreateWithoutDayTaskInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutDayTaskInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutDayTaskInput, TaskUncheckedUpdateWithoutDayTaskInput>
  }

  export type TaskUpdateWithoutDayTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dayNumber?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    feature?: FeatureUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutDayTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dayNumber?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    featureId?: StringFieldUpdateOperationsInput | string
  }

  export type BuildLogUpsertWithoutDayTaskInput = {
    update: XOR<BuildLogUpdateWithoutDayTaskInput, BuildLogUncheckedUpdateWithoutDayTaskInput>
    create: XOR<BuildLogCreateWithoutDayTaskInput, BuildLogUncheckedCreateWithoutDayTaskInput>
    where?: BuildLogWhereInput
  }

  export type BuildLogUpdateToOneWithWhereWithoutDayTaskInput = {
    where?: BuildLogWhereInput
    data: XOR<BuildLogUpdateWithoutDayTaskInput, BuildLogUncheckedUpdateWithoutDayTaskInput>
  }

  export type BuildLogUpdateWithoutDayTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBuildLogsNestedInput
    product?: ProductUpdateOneRequiredWithoutBuildLogsNestedInput
  }

  export type BuildLogUncheckedUpdateWithoutDayTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutBuildLogsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutUserInput
    trial?: TrialCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutUserInput
    aiLogs?: AiLogCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBuildLogsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    trial?: TrialUncheckedCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBuildLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBuildLogsInput, UserUncheckedCreateWithoutBuildLogsInput>
  }

  export type ProductCreateWithoutBuildLogsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductsInput
    features?: FeatureCreateNestedManyWithoutProductInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutProductInput
    aiLogs?: AiLogCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBuildLogsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    userId: string
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    features?: FeatureUncheckedCreateNestedManyWithoutProductInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutProductInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBuildLogsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBuildLogsInput, ProductUncheckedCreateWithoutBuildLogsInput>
  }

  export type DayTaskCreateWithoutBuildLogInput = {
    id?: string
    dayIndex: number
    dueDate: Date | string
    completedAt?: Date | string | null
    category: string
    description: string
    status?: string
    milestoneGoal?: string | null
    shipCheck?: string | null
    task: TaskCreateNestedOneWithoutDayTaskInput
  }

  export type DayTaskUncheckedCreateWithoutBuildLogInput = {
    id?: string
    taskId: string
    dayIndex: number
    dueDate: Date | string
    completedAt?: Date | string | null
    category: string
    description: string
    status?: string
    milestoneGoal?: string | null
    shipCheck?: string | null
  }

  export type DayTaskCreateOrConnectWithoutBuildLogInput = {
    where: DayTaskWhereUniqueInput
    create: XOR<DayTaskCreateWithoutBuildLogInput, DayTaskUncheckedCreateWithoutBuildLogInput>
  }

  export type DayTaskCreateManyBuildLogInputEnvelope = {
    data: DayTaskCreateManyBuildLogInput | DayTaskCreateManyBuildLogInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBuildLogsInput = {
    update: XOR<UserUpdateWithoutBuildLogsInput, UserUncheckedUpdateWithoutBuildLogsInput>
    create: XOR<UserCreateWithoutBuildLogsInput, UserUncheckedCreateWithoutBuildLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBuildLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBuildLogsInput, UserUncheckedUpdateWithoutBuildLogsInput>
  }

  export type UserUpdateWithoutBuildLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutUserNestedInput
    trial?: TrialUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBuildLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    trial?: TrialUncheckedUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProductUpsertWithoutBuildLogsInput = {
    update: XOR<ProductUpdateWithoutBuildLogsInput, ProductUncheckedUpdateWithoutBuildLogsInput>
    create: XOR<ProductCreateWithoutBuildLogsInput, ProductUncheckedCreateWithoutBuildLogsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBuildLogsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBuildLogsInput, ProductUncheckedUpdateWithoutBuildLogsInput>
  }

  export type ProductUpdateWithoutBuildLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
    features?: FeatureUpdateManyWithoutProductNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutProductNestedInput
    aiLogs?: AiLogUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBuildLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUncheckedUpdateManyWithoutProductNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutProductNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutProductNestedInput
  }

  export type DayTaskUpsertWithWhereUniqueWithoutBuildLogInput = {
    where: DayTaskWhereUniqueInput
    update: XOR<DayTaskUpdateWithoutBuildLogInput, DayTaskUncheckedUpdateWithoutBuildLogInput>
    create: XOR<DayTaskCreateWithoutBuildLogInput, DayTaskUncheckedCreateWithoutBuildLogInput>
  }

  export type DayTaskUpdateWithWhereUniqueWithoutBuildLogInput = {
    where: DayTaskWhereUniqueInput
    data: XOR<DayTaskUpdateWithoutBuildLogInput, DayTaskUncheckedUpdateWithoutBuildLogInput>
  }

  export type DayTaskUpdateManyWithWhereWithoutBuildLogInput = {
    where: DayTaskScalarWhereInput
    data: XOR<DayTaskUpdateManyMutationInput, DayTaskUncheckedUpdateManyWithoutBuildLogInput>
  }

  export type DayTaskScalarWhereInput = {
    AND?: DayTaskScalarWhereInput | DayTaskScalarWhereInput[]
    OR?: DayTaskScalarWhereInput[]
    NOT?: DayTaskScalarWhereInput | DayTaskScalarWhereInput[]
    id?: StringFilter<"DayTask"> | string
    taskId?: StringFilter<"DayTask"> | string
    dayIndex?: IntFilter<"DayTask"> | number
    dueDate?: DateTimeFilter<"DayTask"> | Date | string
    completedAt?: DateTimeNullableFilter<"DayTask"> | Date | string | null
    category?: StringFilter<"DayTask"> | string
    description?: StringFilter<"DayTask"> | string
    status?: StringFilter<"DayTask"> | string
    milestoneGoal?: StringNullableFilter<"DayTask"> | string | null
    shipCheck?: StringNullableFilter<"DayTask"> | string | null
    buildLogId?: StringNullableFilter<"DayTask"> | string | null
  }

  export type UserCreateWithoutDailyStreakInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogCreateNestedManyWithoutUserInput
    trial?: TrialCreateNestedOneWithoutUserInput
    aiLogs?: AiLogCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyStreakInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutUserInput
    trial?: TrialUncheckedCreateNestedOneWithoutUserInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyStreakInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyStreakInput, UserUncheckedCreateWithoutDailyStreakInput>
  }

  export type ProductCreateWithoutDailyStreakInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductsInput
    features?: FeatureCreateNestedManyWithoutProductInput
    buildLogs?: BuildLogCreateNestedManyWithoutProductInput
    aiLogs?: AiLogCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDailyStreakInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    userId: string
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    features?: FeatureUncheckedCreateNestedManyWithoutProductInput
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutProductInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDailyStreakInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDailyStreakInput, ProductUncheckedCreateWithoutDailyStreakInput>
  }

  export type UserUpsertWithoutDailyStreakInput = {
    update: XOR<UserUpdateWithoutDailyStreakInput, UserUncheckedUpdateWithoutDailyStreakInput>
    create: XOR<UserCreateWithoutDailyStreakInput, UserUncheckedCreateWithoutDailyStreakInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyStreakInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyStreakInput, UserUncheckedUpdateWithoutDailyStreakInput>
  }

  export type UserUpdateWithoutDailyStreakInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUpdateManyWithoutUserNestedInput
    trial?: TrialUpdateOneWithoutUserNestedInput
    aiLogs?: AiLogUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyStreakInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUncheckedUpdateManyWithoutUserNestedInput
    trial?: TrialUncheckedUpdateOneWithoutUserNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProductUpsertWithoutDailyStreakInput = {
    update: XOR<ProductUpdateWithoutDailyStreakInput, ProductUncheckedUpdateWithoutDailyStreakInput>
    create: XOR<ProductCreateWithoutDailyStreakInput, ProductUncheckedCreateWithoutDailyStreakInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDailyStreakInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDailyStreakInput, ProductUncheckedUpdateWithoutDailyStreakInput>
  }

  export type ProductUpdateWithoutDailyStreakInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
    features?: FeatureUpdateManyWithoutProductNestedInput
    buildLogs?: BuildLogUpdateManyWithoutProductNestedInput
    aiLogs?: AiLogUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDailyStreakInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUncheckedUpdateManyWithoutProductNestedInput
    buildLogs?: BuildLogUncheckedUpdateManyWithoutProductNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutAiLogsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogCreateNestedManyWithoutUserInput
    trial?: TrialCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiLogsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutUserInput
    trial?: TrialUncheckedCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiLogsInput, UserUncheckedCreateWithoutAiLogsInput>
  }

  export type ProductCreateWithoutAiLogsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductsInput
    features?: FeatureCreateNestedManyWithoutProductInput
    buildLogs?: BuildLogCreateNestedManyWithoutProductInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAiLogsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    userId: string
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    features?: FeatureUncheckedCreateNestedManyWithoutProductInput
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutProductInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAiLogsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAiLogsInput, ProductUncheckedCreateWithoutAiLogsInput>
  }

  export type UserUpsertWithoutAiLogsInput = {
    update: XOR<UserUpdateWithoutAiLogsInput, UserUncheckedUpdateWithoutAiLogsInput>
    create: XOR<UserCreateWithoutAiLogsInput, UserUncheckedCreateWithoutAiLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiLogsInput, UserUncheckedUpdateWithoutAiLogsInput>
  }

  export type UserUpdateWithoutAiLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUpdateManyWithoutUserNestedInput
    trial?: TrialUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUncheckedUpdateManyWithoutUserNestedInput
    trial?: TrialUncheckedUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProductUpsertWithoutAiLogsInput = {
    update: XOR<ProductUpdateWithoutAiLogsInput, ProductUncheckedUpdateWithoutAiLogsInput>
    create: XOR<ProductCreateWithoutAiLogsInput, ProductUncheckedCreateWithoutAiLogsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAiLogsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAiLogsInput, ProductUncheckedUpdateWithoutAiLogsInput>
  }

  export type ProductUpdateWithoutAiLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductsNestedInput
    features?: FeatureUpdateManyWithoutProductNestedInput
    buildLogs?: BuildLogUpdateManyWithoutProductNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAiLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUncheckedUpdateManyWithoutProductNestedInput
    buildLogs?: BuildLogUncheckedUpdateManyWithoutProductNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutTokenUsagesInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogCreateNestedManyWithoutUserInput
    trial?: TrialCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutUserInput
    aiLogs?: AiLogCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenUsagesInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutUserInput
    trial?: TrialUncheckedCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenUsagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenUsagesInput, UserUncheckedCreateWithoutTokenUsagesInput>
  }

  export type UserUpsertWithoutTokenUsagesInput = {
    update: XOR<UserUpdateWithoutTokenUsagesInput, UserUncheckedUpdateWithoutTokenUsagesInput>
    create: XOR<UserCreateWithoutTokenUsagesInput, UserUncheckedCreateWithoutTokenUsagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenUsagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenUsagesInput, UserUncheckedUpdateWithoutTokenUsagesInput>
  }

  export type UserUpdateWithoutTokenUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUpdateManyWithoutUserNestedInput
    trial?: TrialUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUncheckedUpdateManyWithoutUserNestedInput
    trial?: TrialUncheckedUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogCreateNestedManyWithoutUserInput
    trial?: TrialCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutUserInput
    aiLogs?: AiLogCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutUserInput
    trial?: TrialUncheckedCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUpdateManyWithoutUserNestedInput
    trial?: TrialUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUncheckedUpdateManyWithoutUserNestedInput
    trial?: TrialUncheckedUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogCreateNestedManyWithoutUserInput
    trial?: TrialCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakCreateNestedManyWithoutUserInput
    aiLogs?: AiLogCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    username?: string | null
    onboardingCompleted?: boolean
    discovery?: string | null
    role?: string | null
    bestStreakOverall?: number
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutUserInput
    buildLogs?: BuildLogUncheckedCreateNestedManyWithoutUserInput
    trial?: TrialUncheckedCreateNestedOneWithoutUserInput
    DailyStreak?: DailyStreakUncheckedCreateNestedManyWithoutUserInput
    aiLogs?: AiLogUncheckedCreateNestedManyWithoutUserInput
    tokenUsages?: TokenUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUpdateManyWithoutUserNestedInput
    trial?: TrialUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    discovery?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    bestStreakOverall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput
    buildLogs?: BuildLogUncheckedUpdateManyWithoutUserNestedInput
    trial?: TrialUncheckedUpdateOneWithoutUserNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutUserNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutUserNestedInput
    tokenUsages?: TokenUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProductCreateManyUserInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    problemStatement: string
    targetAudience: string
    userGoals: string
    uniqueValueProp: string
    isMvpGenerated?: boolean
    isRoadmapGenerated?: boolean
    currentStreak?: number
    AllTimeBestStreak?: number
    active?: boolean
    techStack?: string | null
    inspirationApps?: string | null
    initialFeatures?: string | null
    startDate?: Date | string
    deadline: Date | string
    dailyCommitmentHrs?: number
    mvpSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildLogCreateManyUserInput = {
    id?: string
    productId: string
    logDate: Date | string
    tweet?: string | null
    dayIndex?: number
    summary: string
    generatedAt?: Date | string
  }

  export type DailyStreakCreateManyUserInput = {
    id?: string
    productId: string
    date: Date | string
    hasBuildLog?: boolean
    createdAt?: Date | string
  }

  export type AiLogCreateManyUserInput = {
    id?: string
    productId: string
    ai_model: string
    type: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TokenUsageCreateManyUserInput = {
    id?: string
    purpose: string
    tokens: number
    createdAt?: Date | string
  }

  export type ProductUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUpdateManyWithoutProductNestedInput
    buildLogs?: BuildLogUpdateManyWithoutProductNestedInput
    DailyStreak?: DailyStreakUpdateManyWithoutProductNestedInput
    aiLogs?: AiLogUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUncheckedUpdateManyWithoutProductNestedInput
    buildLogs?: BuildLogUncheckedUpdateManyWithoutProductNestedInput
    DailyStreak?: DailyStreakUncheckedUpdateManyWithoutProductNestedInput
    aiLogs?: AiLogUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    problemStatement?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    userGoals?: StringFieldUpdateOperationsInput | string
    uniqueValueProp?: StringFieldUpdateOperationsInput | string
    isMvpGenerated?: BoolFieldUpdateOperationsInput | boolean
    isRoadmapGenerated?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    AllTimeBestStreak?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    techStack?: NullableStringFieldUpdateOperationsInput | string | null
    inspirationApps?: NullableStringFieldUpdateOperationsInput | string | null
    initialFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyCommitmentHrs?: FloatFieldUpdateOperationsInput | number
    mvpSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutBuildLogsNestedInput
    DayTask?: DayTaskUpdateManyWithoutBuildLogNestedInput
  }

  export type BuildLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DayTask?: DayTaskUncheckedUpdateManyWithoutBuildLogNestedInput
  }

  export type BuildLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hasBuildLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutDailyStreakNestedInput
  }

  export type DailyStreakUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hasBuildLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hasBuildLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ai_model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutAiLogsNestedInput
  }

  export type AiLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    ai_model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    ai_model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUsageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    tokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCreateManyProductInput = {
    id?: string
    name: string
    description: string
    rank: number
  }

  export type BuildLogCreateManyProductInput = {
    id?: string
    userId: string
    logDate: Date | string
    tweet?: string | null
    dayIndex?: number
    summary: string
    generatedAt?: Date | string
  }

  export type DailyStreakCreateManyProductInput = {
    id?: string
    userId: string
    date: Date | string
    hasBuildLog?: boolean
    createdAt?: Date | string
  }

  export type AiLogCreateManyProductInput = {
    id?: string
    userId: string
    ai_model: string
    type: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FeatureUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type BuildLogUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBuildLogsNestedInput
    DayTask?: DayTaskUpdateManyWithoutBuildLogNestedInput
  }

  export type BuildLogUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DayTask?: DayTaskUncheckedUpdateManyWithoutBuildLogNestedInput
  }

  export type BuildLogUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: NullableStringFieldUpdateOperationsInput | string | null
    dayIndex?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hasBuildLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyStreakNestedInput
  }

  export type DailyStreakUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hasBuildLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStreakUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hasBuildLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiLogUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    ai_model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiLogsNestedInput
  }

  export type AiLogUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ai_model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiLogUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ai_model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyFeatureInput = {
    id?: string
    title: string
    estimatedHours?: number | null
    status?: $Enums.TaskStatus
    dayNumber?: number | null
    completed?: boolean
  }

  export type TaskUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dayNumber?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    dayTask?: DayTaskUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dayNumber?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    dayTask?: DayTaskUncheckedUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dayNumber?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DayTaskCreateManyBuildLogInput = {
    id?: string
    taskId: string
    dayIndex: number
    dueDate: Date | string
    completedAt?: Date | string | null
    category: string
    description: string
    status?: string
    milestoneGoal?: string | null
    shipCheck?: string | null
  }

  export type DayTaskUpdateWithoutBuildLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    milestoneGoal?: NullableStringFieldUpdateOperationsInput | string | null
    shipCheck?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TaskUpdateOneRequiredWithoutDayTaskNestedInput
  }

  export type DayTaskUncheckedUpdateWithoutBuildLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    milestoneGoal?: NullableStringFieldUpdateOperationsInput | string | null
    shipCheck?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DayTaskUncheckedUpdateManyWithoutBuildLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    milestoneGoal?: NullableStringFieldUpdateOperationsInput | string | null
    shipCheck?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}