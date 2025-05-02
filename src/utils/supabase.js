import { createClient } from '@supabase/supabase-js'

// 👉 Validate environment variables
if (!import.meta.env.VITE_SUPABASE_URL) {
  console.error('Environment variable VITE_SUPABASE_URL is missing.')
}
if (!import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.error('Environment variable VITE_SUPABASE_ANON_KEY is missing.')
}
if (!import.meta.env.VITE_SUPABASE_SERVICE_ROLE) {
  console.error('Environment variable VITE_SUPABASE_SERVICE_ROLE is missing.')
}

let supabaseInstance = null

// 👉 Create a single supabase client for interacting with your database
export const supabase =
  supabaseInstance ||
  (supabaseInstance = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
  ))

// 👉 Create a single supabase admin client for interacting auth users
export const supabaseAdmin = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_SERVICE_ROLE,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  },
)

// 👉 Form Action utils
export const formActionDefault = {
  formProcess: false,
  formStatus: 200,
  formErrorMessage: 'sdsvssds',
  formSuccessMessage: 'dscsdcscscs',
}

// 👉 Form Metrics
export const formDataMetrics = ['kg', 'L', 'm', 'piece(s)']

// 👉 Table Pagination
export const tablePagination = (
  { page, itemsPerPage, sortBy },
  defaultColumn = 'id',
  isAscending = true,
) => {
  const [column, order] =
    sortBy && sortBy[0] ? [sortBy[0].key, sortBy[0].order === 'asc'] : [defaultColumn, isAscending]

  if (itemsPerPage === -1) {
    const rangeStart = 0
    const rangeEnd = 999999999999999

    return { rangeStart, rangeEnd, column, order }
  }

  const rangeStart = (page - 1) * itemsPerPage
  const rangeEnd = rangeStart + itemsPerPage - 1

  return { rangeStart, rangeEnd, column, order }
}

// 👉 Handle Search if null turn to empty string
export const tableSearch = (search) => {
  return (search ||= '')
}
