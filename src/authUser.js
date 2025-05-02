import { computed } from 'vue'
import { useAuthUser } from '@/composables/auth/useAuthUser'

export function useUserRole() {
  const authUser = useAuthUser()

  const userRole = computed(() => {
    return authUser?.user_role || 'Guest' // Default to 'Guest' if user_role is null
  })

  return { userRole }
}
