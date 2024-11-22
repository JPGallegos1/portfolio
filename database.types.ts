export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agile_methodology: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: never
          name: string
        }
        Update: {
          id?: never
          name?: string
        }
        Relationships: []
      }
      category: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: never
          name: string
        }
        Update: {
          id?: never
          name?: string
        }
        Relationships: []
      }
      company: {
        Row: {
          description: string | null
          id: number
          logo_url: string | null
          name: string
          website: string | null
        }
        Insert: {
          description?: string | null
          id?: never
          logo_url?: string | null
          name: string
          website?: string | null
        }
        Update: {
          description?: string | null
          id?: never
          logo_url?: string | null
          name?: string
          website?: string | null
        }
        Relationships: []
      }
      project_agile_methodology: {
        Row: {
          agile_methodology_id: number
          project_id: number
        }
        Insert: {
          agile_methodology_id: number
          project_id: number
        }
        Update: {
          agile_methodology_id?: number
          project_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_agile_methodology_agile_methodology_id_fkey"
            columns: ["agile_methodology_id"]
            isOneToOne: false
            referencedRelation: "agile_methodology"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_agile_methodology_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_category: {
        Row: {
          category_id: number
          project_id: number
        }
        Insert: {
          category_id: number
          project_id: number
        }
        Update: {
          category_id?: number
          project_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_categories_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_technology: {
        Row: {
          project_id: number
          tech_stack_id: number
        }
        Insert: {
          project_id: number
          tech_stack_id: number
        }
        Update: {
          project_id?: number
          tech_stack_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_tech_stack_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_tech_stack_tech_stack_id_fkey"
            columns: ["tech_stack_id"]
            isOneToOne: false
            referencedRelation: "technology"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          company_id: number | null
          description: string | null
          end_date: string | null
          id: number
          name: string
          project_type: string | null
          start_date: string | null
          status: string | null
          team_size: number | null
          thumbnail_url: string | null
        }
        Insert: {
          company_id?: number | null
          description?: string | null
          end_date?: string | null
          id?: never
          name: string
          project_type?: string | null
          start_date?: string | null
          status?: string | null
          team_size?: number | null
          thumbnail_url?: string | null
        }
        Update: {
          company_id?: number | null
          description?: string | null
          end_date?: string | null
          id?: never
          name?: string
          project_type?: string | null
          start_date?: string | null
          status?: string | null
          team_size?: number | null
          thumbnail_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
        ]
      }
      technology: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: never
          name: string
        }
        Update: {
          id?: never
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

// export type Projects = Tables<'projects'>;
export type Company = Tables<'company'>;
export type Category = Tables<'category'>;
export type AgileMethodology = Tables<'agile_methodology'>;
export type Technology = Tables<'technology'>;

export type Project = {
  id: number;
  name: string;
  description: string;
  thumbnail_url: string | null;
  team_size: number;
  company_id: number;
  start_date: string; // ISO date string
  end_date: string; // ISO date string
  status: string;
  project_type: string; // Example project types
  company: Company;
  category: Category[];
  agile_methodology: AgileMethodology[];
  technology: Technology[];
};
