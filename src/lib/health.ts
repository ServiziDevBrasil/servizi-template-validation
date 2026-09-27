export type HealthStatus = {
  status: 'ok';
  service: string;
};

export function getHealthStatus(service = 'servizi-template-validation'): HealthStatus {
  return { status: 'ok', service };
}
