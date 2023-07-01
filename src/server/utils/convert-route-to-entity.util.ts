const mapping: Record<string, string> = {
  ads: 'ad',
  businesses: 'business',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
