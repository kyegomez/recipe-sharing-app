/**
 * Local Storage utility functions for persisting app data
 */

export const getStoredData = <T>(key: string): T | null => {
  if (typeof window === 'undefined') return null
  
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error(`Error getting stored data for key "${key}":`, error)
    return null
  }
}

export const saveToStorage = <T>(key: string, data: T): void => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error(`Error saving data to storage for key "${key}":`, error)
  }
}

export const removeFromStorage = (key: string): void => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing data from storage for key "${key}":`, error)
  }
}

export const clearAllStorage = (): void => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.clear()
  } catch (error) {
    console.error('Error clearing storage:', error)
  }
}

/**
 * Utility functions for specific data operations
 */

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes}m`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`
}

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}