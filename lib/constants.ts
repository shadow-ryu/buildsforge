export const PLAN_LIMITS: Record<
  string,
  { roadmap: number; mvp: number; buildlog: number }
> = {
  free: { roadmap: 1, mvp: 1, buildlog: 4 },
  early: { roadmap: 3, mvp: 2, buildlog: 5 },
  builder: { roadmap: 10, mvp: 5, buildlog: 15 },
  pro: { roadmap: 30, mvp: 15, buildlog: 40 },
  ultimate: { roadmap: 100, mvp: 50, buildlog: 100 },
};
