import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data, error: insertError } = await supabase
    .from('keepalive')
    .insert({ pinged_at: new Date().toISOString() })
    .select('id')
    .single();

  if (insertError) {
    return NextResponse.json({ error: 'Insert failed', detail: insertError.message }, { status: 500 });
  }

  const { error: deleteError } = await supabase
    .from('keepalive')
    .delete()
    .eq('id', data.id);

  if (deleteError) {
    return NextResponse.json({ error: 'Delete failed', detail: deleteError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, ts: new Date().toISOString() });
}
