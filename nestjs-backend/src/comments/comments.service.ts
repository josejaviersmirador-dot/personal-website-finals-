import { Injectable } from '@nestjs/common';

import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()

export class CommentsService {

  private supabase: SupabaseClient;

  constructor() {

    this.supabase = createClient(

      process.env.SUPABASE_URL,

      process.env.SUPABASE_ANON_KEY,

    );

  }

  async getComments() {

    const { data, error } = await this.supabase

      .from('comments')

      .select('*')

      .order('created_at', { ascending: false });

    if (error) throw error;

    return data;

  }

  async addComment(comment: { name: string; message: string }) {

    const { data, error } = await this.supabase

      .from('comments')

      .insert([comment]);

    if (error) throw error;

    return data;

  }

}