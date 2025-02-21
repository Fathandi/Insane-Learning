class StringManipulator:
    def __init__(self, text):
        """
        Inisialisasi kelas dengan teks yang akan dimanipulasi
        """
        self.text = text
        
    def word_frequency(self):
        """
        Menghitung frekuensi setiap kata dalam teks
        """
        
        cleaned_text = ''.join(char.lower() for char in self.text if char.isalnum() or char.isspace())
        words = cleaned_text.split()
        
        
        return {word: words.count(word) for word in set(words)}
    
    def find_palindromes(self):
        """
        Menemukan semua palindrome dalam teks
        """
        words = self.text.lower().split()
        return [word for word in words if word == word[::-1] and len(word) > 1]
    
    def create_acronym(self):
        """
        Membuat akronim dari teks
        """
        words = self.text.split()
        return ''.join(word[0].upper() for word in words if word)
    
    def encode_text(self, shift=3):
        """
        Mengenkripsi teks menggunakan Caesar cipher
        """
        result = ""
        for char in self.text:
            if char.isalpha():
                # Menentukan ASCII offset
                ascii_offset = ord('A') if char.isupper() else ord('a')
                # Menggeser karakter dan memastikan tetap dalam range alphabet
                shifted = chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)
                result += shifted
            else:
                result += char
        return result
    
    def find_longest_word(self):
        """
        Menemukan kata terpanjang dalam teks
        """
        words = self.text.split()
        return max(words, key=len, default="")
    
    def reverse_sentences(self):
        """
        Membalik urutan kata dalam setiap kalimat
        """
        sentences = self.text.split('.')
        reversed_sentences = []
        
        for sentence in sentences:
            if sentence.strip():
                words = sentence.strip().split()
                reversed_words = ' '.join(reversed(words))
                reversed_sentences.append(reversed_words)
                
        return '. '.join(reversed_sentences) + ('.' if self.text.endswith('.') else '')
    
    def extract_emails(self):
        """
        Mengekstrak alamat email dari teks menggunakan regex
        """
        import re
        email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        return re.findall(email_pattern, self.text)
    
    def word_statistics(self):
        """
        Menghasilkan statistik tentang teks
        """
        words = self.text.split()
        chars = [char for char in self.text if char.isalnum()]
        
        return {
            'total_words': len(words),
            'total_chars': len(chars),
            'avg_word_length': sum(len(word) for word in words) / len(words) if words else 0,
            'unique_words': len(set(words)),
            'char_frequency': {char: chars.count(char) for char in set(chars)}
        }


if __name__ == "__main__":
    sample_text = """
    Halo! Ini adalah contoh teks yang akan kita manipulasi.
    Email saya adalah john.doe@example.com dan ada juga jane@email.com.
    Beberapa kata palindrome: kasur rusak, katak, dan radar.
    Python Programming Language adalah bahasa yang sangat powerful.
    """
    
    manipulator = StringManipulator(sample_text)
    
    # Demonstrasi berbagai fungsi
    print("Word Frequency:")
    print(manipulator.word_frequency())
    
    print("\nPalindromes found:")
    print(manipulator.find_palindromes())
    
    print("\nAcronym:")
    print(manipulator.create_acronym())
    
    print("\nEncoded text:")
    print(manipulator.encode_text(shift=3))
    
    print("\nLongest word:")
    print(manipulator.find_longest_word())
    
    print("\nReversed sentences:")
    print(manipulator.reverse_sentences())
    
    print("\nEmails found:")
    print(manipulator.extract_emails())
    
    print("\nText statistics:")
    print(manipulator.word_statistics())