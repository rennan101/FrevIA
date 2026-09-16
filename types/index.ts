export type UserRole = 'user' | 'artist' | 'admin';
export type PostType = 'event' | 'news' | 'music' | 'score' | 'culture' | 'artist';
export type ContentStatus = 'draft' | 'pending_review' | 'published' | 'archived';
export type CommentStatus = 'visible' | 'hidden' | 'pending';
export type FrevoGenre = 'Frevo de Rua' | 'Frevo Canção' | 'Frevo de Bloco' | 'Frevo Livre';
export type StepDifficulty = 'Iniciante' | 'Intermediário' | 'Avançado';

export interface Profile {
  id: string;
  display_name: string;
  avatar_url?: string | null;
  bio?: string | null;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface Artist {
  id: string;
  profile_id?: string | null;
  slug: string;
  name: string;
  genre: FrevoGenre;
  bio?: string | null;
  avatar_url?: string | null;
  cover_url?: string | null;
  instagram_url?: string | null;
  youtube_url?: string | null;
  website_url?: string | null;
  is_authorized_editor: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  // Campos calculados/joins
  followers_count?: number;
  songs_count?: number;
}

export interface ArtistPermission {
  id: string;
  artist_id: string;
  can_edit_lyrics: boolean;
  can_edit_scores: boolean;
  can_submit_content: boolean;
  approved_by?: string | null;
  approved_at?: string | null;
  created_at: string;
}

export interface Song {
  id: string;
  artist_id: string;
  title: string;
  slug: string;
  genre: FrevoGenre;
  description?: string | null;
  lyrics?: string | null;
  score_path?: string | null;
  score_is_private?: boolean;
  cover_url?: string | null;
  status: ContentStatus;
  submitted_by?: string | null;
  published_at?: string | null;
  created_at: string;
  updated_at: string;
  artist?: Artist;
}

export interface Post {
  id: string;
  author_id: string;
  artist_id?: string | null;
  source_song_id?: string | null;
  type: PostType;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  cover_url?: string | null;
  tags?: string[];
  status: ContentStatus;
  published_at?: string | null;
  created_at: string;
  updated_at: string;
  author?: Profile;
  artist?: Artist;
  likes_count?: number;
  comments_count?: number;
  is_liked?: boolean;
}

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  status: CommentStatus;
  created_at: string;
  updated_at: string;
  user?: Profile;
}

export interface FrevoStep {
  id: string;
  name: string;
  slug: string;
  description: string;
  instructions: string;
  media_url?: string | null;
  media_type: 'image' | 'gif' | 'video';
  difficulty: StepDifficulty;
  category: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface HistoryEntry {
  id: string;
  title: string;
  slug: string;
  period_label: string;
  year_start?: number | null;
  year_end?: number | null;
  content: string;
  image_url?: string | null;
  source_text?: string | null;
  source_url?: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface MapPoint {
  id: string;
  name: string;
  slug: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  image_url?: string | null;
  category: string;
  period_label?: string | null;
  source_text?: string | null;
  source_url?: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}
