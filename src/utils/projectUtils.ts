/**
 * Get the subtitle for a project based on its title
 */
export const getProjectSubtitle = (title: string): string => {
  switch (title) {
    case 'NomadLiving Stays':
      return 'Luxury Glamping Booking Platform'
    case 'NomadLiving Boutique':
      return 'Lifestyle D2C E-commerce'
    case 'NomadLiving Ops Console':
      return 'Internal B2B Operations Dashboard'
    default:
      return 'Internal B2B Operations Dashboard'
  }
}
