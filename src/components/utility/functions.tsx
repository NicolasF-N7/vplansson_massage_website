export function transformToSafeUrl(text: string): string {
    // Convert the string to lowercase
    const lowercaseText = text.toLowerCase();
  
    // Remove accents from the string
    const withoutAccents = lowercaseText.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    // Remove punctuation marks from the string
    const withoutPunctuation = withoutAccents.replace(/[^\w]/g, '');
  
    return withoutPunctuation;
  }