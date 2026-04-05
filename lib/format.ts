function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
  }).format(new Date(date));
}

function getStatusColor(status) {
  switch (status) {
    case 'paid':
      return { bg: '#DCFCE7', text: '#16A34A' };
    case 'pending':
      return { bg: '#FEF3C7', text: '#D97706' };
    case 'overdue':
      return { bg: '#FEE2E2', text: '#DC2626' };
    case 'active':
      return { bg: '#DCFCE7', text: '#16A34A' };
    case 'upcoming':
      return { bg: '#DBEAFE', text: '#2563EB' };
    case 'completed':
      return { bg: '#F3E8FF', text: '#7C3AED' };
    case 'cancelled':
      return { bg: '#F1F5F9', text: '#64748B' };
    default:
      return { bg: '#FFFFFF', text: '#000000' };
  }
}

module.exports = {
  formatCurrency,
  formatDate,
  formatShortDate,
  getStatusColor,
};
